import React from 'react';
import ConnectWallet from './ConnectWallet';

const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-gray-800 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-center">
                    <img src="/images/logo.png" alt="Kryptium Logo" className="inline-block mx-auto mr-2" />
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex items-center space-x-8">
                        <li>
                            <a href="#dashboard" className="text-gray-800 dark:text-gray-200 font-semibold">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#my-nfts" className="text-gray-800 dark:text-gray-200 font-semibold">
                                My NFTs
                            </a>
                        </li>
                        <li>
                            <a href="#docs" className="text-gray-800 dark:text-gray-200 font-semibold">
                                Docs
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4 absolute top-4 right-4">
                    <ConnectWallet />
                </div>
            </div>
        </header>
    );
};

export default Header;







