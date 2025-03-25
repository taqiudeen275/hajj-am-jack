import PocketBase from 'pocketbase';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';


const  POCKET_BASE_URL = 'https://poll-pulse.pockethost.io/';



export class DatabaseClient {
    client: PocketBase;
    postBaseURL: string;
    galleryBaseURL: string;
    authorBaseURL: string;
    constructor () {
        this.client = new PocketBase(POCKET_BASE_URL);
        this.postBaseURL = `${POCKET_BASE_URL}api/files/vg4n7izj1fco4qc/`
        this.galleryBaseURL = `${POCKET_BASE_URL}api/files/5jo2abkbxs6upgu/`
        this.authorBaseURL = `${POCKET_BASE_URL}api/files/qgiim6q4w0ilb57/`
    }

    async authenticate (email: string, password: string) {
        try {
            const result = await this.client.admins.authWithPassword(email, password);
            // console.log('authenticate result:', result);
            if (!result?.token) {
                throw new Error("Invalid email or password");
            }
            return result;
        } catch (err) {
            console.error(err);
            throw new Error("Invalid email or password");
        }
    }

    async authenticatevoter (email: string, password: string) {
        try {
            const result = await this.client.collection('voter_user').authWithPassword(email, password);
            // console.log('authenticate result:', result);
            if (!result?.token) {
                throw new Error("Invalid email or password");
            }
            return result;
        } catch (err) {
            console.error(err);
            throw new Error("Invalid email or password");
        }
    }

    async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('pb_auth');
        if (!cookie) {
            return false;
        }

        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.isValid || false
    }
    async isVoterAuthenticated(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('vpb_auth');
        if (!cookie) {
            return false;
        }

        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.isValid || false
    }

    async getVoterUser(cookieStore: any) {
        const cookie = cookieStore.get('vpb_auth');
        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.model ;
    }

    async getUser(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('pb_auth');
        if (!cookie) {
            return false;
        }

        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.model ;
    }
    async logoutUser(){
        try {
            await this.client.authStore.clear();
            document.cookie=this.client.authStore.exportToCookie({ httpOnly: false });

        } catch (err) {
            // @ts-ignore
            throw new Error(err.message);
        }
    }
}

export const pb = new DatabaseClient();

export default pb;