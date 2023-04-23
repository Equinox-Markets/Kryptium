import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 py-4 mt-8">
            <div className="container mx-auto text-center">
                <ul className="flex justify-center items-center space-x-4">
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                            Discord
                        </a>
                    </li>
                    <li>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                            Telegram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

