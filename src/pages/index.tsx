import { FC } from 'react';
import { APP_NAME } from '@/lib/consts';
import ConnectWallet from '@/components/ConnectWallet';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import MyNFT from '@/components/MyNFT';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Home: FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            <Header />
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <Dashboard />
                <MyNFT />
            </div>
            <Footer />
            <div className="absolute top-6 right-6">
                <ConnectWallet />
            </div>
            <ThemeSwitcher className="absolute bottom-6 right-6" />
        </div>
    );
};

export default Home;

