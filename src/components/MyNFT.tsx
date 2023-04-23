import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Replace with the ABI of your NFT contract
const nftContractAbi = [
  // ...
];

// Replace with the address of your NFT contract
const nftContractAddress = '0x...';

const MyNFTs: React.FC = () => {
  const [nfts, setNfts] = useState([]);

  const loadNFTs = async () => {
    try {
      // Check if the user has a connected wallet
      if (window.ethereum) {
        // Request access to the user's wallet
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create an instance of ethers.js with the provided contract ABI and address
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(nftContractAddress, nftContractAbi, provider);

        // Retrieve the user's NFTs from the contract
        // This assumes your contract has a function `getNFTsByOwner` that takes an address as input and returns an array of NFTs
        const ownedNFTs = await contract.getNFTsByOwner(account);

        // Update the state with the loaded NFTs
        setNfts(ownedNFTs);
      } else {
        console.error('No Ethereum wallet detected');
      }
    } catch (error) {
      console.error('Error loading NFTs:', error);
    }
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

