import React from 'react';
import Image from 'next/image';

const Dashboard: React.FC = () => {
    return (
        <section id="dashboard" className="py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Welcome to Kryptium</h2>
                <div className="flex items-center space-x-4">
                    <div className="w-2/3">
                        <p className="text-left">
                            Kryptium is a decentralized financial platform that aims to create a fair, economically sustainable, and mutually beneficial ecosystem for all participants.
                        </p>
                    </div>
                    <Image
                        src="/images/logo.png"
                        alt="Kryptium Logo"
                        width={400}
                        height={400}
                        className="inline-block mx-auto mr-2"
                    />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;

