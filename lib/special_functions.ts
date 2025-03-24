import pb from "./my_pb";
import { getAuthor } from "@/app/action";


export interface BlogPost {
  id: string;
  overview: string;
  title: string;
  date: string;
  author: string;
  authorPhoto: string;
  coverImage: string;
}

interface BlogListGridProps {
  posts: BlogPost[];
}

export function timestampToAgo(timestamp: string): string {
    const now = new Date();
    const then = new Date(timestamp);
    const diff = now.getTime() - then.getTime();
  
    const secondsAgo = Math.floor(diff / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
  
    if (daysAgo > 0) {
      return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    } else {
      return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
    }
  }
 export function mapToBlogPost(post: any, author :any[]): BlogPost {
    const post_author =  author.find((person)=> person.id === post.author);
  
    return {
      id: post.id,
      title: post.title,
      overview: post.overview,
      date: `${timestampToAgo(post.created)}`, // Assuming the 'created' field represents the date
      author: post_author.full_name, // Assuming 'author' is the author's name
      authorPhoto: `${pb.authorBaseURL}${post_author.id}/${post_author.photo}`, // You can provide a default value or fetch the author's photo if available
      coverImage: `${pb.postBaseURL}${post.id}/${post.thumbnail}`,
    };
  }

 export interface BlogSinglePost {
    id: string;
    title: string;
    date: string;
    overview: string;
    content: string;
    author: string;
    authorPhoto: string;
    coverImage: string;
  }
  export async function mapToSingleBlogPost(post: any): Promise<BlogSinglePost> {
    const author = await getAuthor();
    const post_author =  author.find((person)=> person.id === post.author);
  
    return {
      id: post.id,
      title: post.title,
      overview: post.overview,
      content: post.content, // Assuming the 'created' field represents the date
      date: `${timestampToAgo(post.created)}`, // Assuming the 'created' field represents the date
      author: post_author!.full_name, // Assuming 'author' is the author's name
      authorPhoto: `${pb.authorBaseURL}${post_author!.id}/${post_author!.photo}`, // You can provide a default value or fetch the author's photo if available
      coverImage: `${pb.postBaseURL}${post.id}/${post.thumbnail}`,
    };
  }