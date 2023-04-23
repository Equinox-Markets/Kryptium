import { FC } from 'react';
import { APP_NAME } from '@/lib/consts';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import MyNFT from '@/components/MyNFT';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Home: FC = () => {
  const handleMintNow = () => {
    console.log('Mint now button clicked');
    // Add your minting functionality here
  };

  return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-900 dark:bg-gray-100 sm:items-center py-4 sm:pt-0">
            <Header />
            <div className="flex-grow">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 gap-8">
                        <Dashboard handleMintNow={handleMintNow} />
                        <MyNFT />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;


