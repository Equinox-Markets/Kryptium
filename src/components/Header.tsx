import React from 'react';
import ConnectWallet from './ConnectWallet';

const Header: React.FC = () => {
    return (
        <header className="...">
            <div className="...">
                <img src="/images/logo.png" alt="Kryptium Logo" />
            </div>
            <nav className="...">
                <ul className="...">
                    <li>Dashboard</li>
                    <li>My NFTs</li>
                </ul>
            </nav>
            <ConnectWallet />
        </header>
    );
};

export default Header;
