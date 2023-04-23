import React from 'react';
import Image from 'next/image';

interface DashboardProps {
  handleMintNow: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ handleMintNow }) => {
  return (
    <section id="dashboard" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="w-1/2 max-w-xs">
                <Image src="/images/robot.png" alt="NFT Image" width={250} height={250} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Welcome to Kryptium</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Kryptium is a decentralized financial platform that aims to create a fair, economically sustainable, and mutually beneficial ecosystem for all participants.
                </p>
                <div className="mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleMintNow}
                  >
                    Mint now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;


