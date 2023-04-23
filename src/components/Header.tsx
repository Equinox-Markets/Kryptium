import React from 'react';
import ConnectWallet from './ConnectWallet';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-gray-800 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-center">
                    <img src="/images/logo.png" alt="Kryptium Logo" className="inline-block mx-auto mr-2" />
                    <span className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Kryptium</span>
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex items-center space-x-12">
                        <li className="text-gray-800 dark:text-gray-200 font-semibold">Dashboard</li>
                        <li className="text-gray-800 dark:text-gray-200 font-semibold">My NFTs</li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-6 absolute top-4 right-4">
                    <ThemeSwitcher />
                    <ConnectWallet />
                </div>
            </div>
        </header>
    );
};

export default Header;





