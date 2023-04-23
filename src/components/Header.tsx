import React from 'react';
import ConnectWallet from './ConnectWallet';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 py-4 shadow-md relative">
      <div className="container mx-auto">
        <Image
          src="/images/logo.png"
          alt="Kryptium Logo"
          width={50}
          height={50}
          className="absolute top-4 left-4"
        />
        <nav className="hidden md:block absolute top-4 left-1/4">
          <ul className="flex items-center space-x-8">
            <li>
              <a
                href="#dashboard"
                className="text-gray-800 dark:text-gray-200 font-semibold"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#my-nfts"
                className="text-gray-800 dark:text-gray-200 font-semibold"
              >
                My NFTs
              </a>
            </li>
            <li>
              <a
                href="#docs"
                className="text-gray-800 dark:text-gray-200 font-semibold"
              >
                Docs
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute top-4 right-4">
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
};

export default Header;








