// MyNFT.tsx
const MyNFT: React.FC = () => {
    return <div className="MyNFT"><div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">My NFTs</h2>
      <div className="flex justify-center">
        {address ? (
          userNFTs.length > 0 ? (
            userNFTs.map((nft, index) => (
              // Replace with the JSX structure you want to display for each NFT
              <div key={index}>NFT {index + 1}: {nft}</div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              {noNFTMessage}
              <a
                href="https://example.com" // Replace with the actual website URL
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                You do not own any NFTs. You can purchase them here
              </a>
            </p>
          )
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Please connect your wallet to view your NFTs
          </p>
        )}
        </div>
      {!address && (
        <div className="flex justify-center mt-4">
          <ConnectWallet onClick={handleConnectWallet} />
        </div>
      )}
    </div></div>;
};
export default MyNFT;
