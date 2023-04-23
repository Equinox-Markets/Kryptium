import { FC } from 'react';
import { APP_NAME } from '@/lib/consts';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import MyNFT from '@/components/MyNFT';
import Footer from '@/components/Footer';
import ThemeProvider from '@/context/ThemeContext';

const Home: FC = () => {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
                <Header />
                <div className="flex-grow">
                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-1 gap-8">
                            <Dashboard />
                            <MyNFT />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Home;



