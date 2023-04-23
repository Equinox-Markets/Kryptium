import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <section id="dashboard" className="py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Welcome to Kryptium</h2>
                <div className="flex items-center space-x-4">
                    <img src="/path/to/your/image.jpg" alt="Sample Image" className="w-1/3" />
                    <div className="w-2/3">
                        <p className="text-left">
                            Kryptium is a decentralized financial platform that aims to create a fair, economically sustainable, and mutually beneficial ecosystem for all participants.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;

