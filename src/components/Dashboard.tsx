import React from 'react';
import Image from 'next/image';

const Dashboard: React.FC = () => {
    return (
        <section id="dashboard" className="py-8 relative">
            <div className="container mx-auto">
                <div className="flex items-center space-x-4">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                        <Image
                            src="/images/logo2.png"
                            alt="Kryptium Logo"
                            width={500}
                            height={500}
                            className="inline-block mx-auto mr-2"
                        />
                    </div>
                    <div className="w-2/3 absolute right-0 top-1/2 transform -translate-y-1/2">
                        <h2 className="text-3xl font-semibold mb-2">Welcome to Kryptium</h2>
                        <p className="text-left">
                            Kryptium is a decentralized financial platform that aims to create a fair, economically sustainable, and mutually beneficial ecosystem for all participants.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;



