'use client'
import { NavigationBar } from '@/components/shared/NavigtionBar';
import React from 'react'
interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    );
};


export default Providers
