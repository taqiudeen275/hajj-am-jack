'use client'
import { NavigationBar } from '@/components/shared/NavigtionBar';
import React from 'react'
interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
};


export default Providers
