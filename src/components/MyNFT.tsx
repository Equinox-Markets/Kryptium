import React, { useState, useEffect } from 'react';

const MyNFTs: React.FC = () => {
  const [nfts, setNfts] = useState([]); // Replace with the appropriate data type for your NFTs

  // Load NFTs from the specific collection by connecting to the user's wallet
  const loadNFTs = async () => {
    // Implement your logic to load NFTs from the connected wallet
    // Then update the state with the loaded NFTs
  };

  useEffect(() => {
    loadNFTs();
  }, []);

  return (
    <section id="my-nfts" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">My NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <img
                src={nft.image} // Replace with the appropriate image property from your NFT data
                alt={`NFT ${nft.name}`} // Replace with the appropriate name property from your NFT data
                className="w-full h-64 object-cover object-center rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-gray-100">{nft.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{nft.description}</p>
            </div>
          ))}
        </div>
        {nfts.length === 0 && (
          <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
            <p>No NFTs found in your collection.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyNFTs;

