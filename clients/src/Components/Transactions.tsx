import { useContext } from "react";
import { TransactionConnect } from "../context/TransactionConnect";
import { Loader } from "./";
import useFetch from "../hooks/useFetch";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}: {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
  url: string;
}) => {
  const gifUrl = useFetch(keyword);

  return (
    <div className="bg-[#181918] m-2 sm:m-4 flex flex-1 min-w-full sm:min-w-[270px] sm:max-w-[300px] lg:min-w-[350px] lg:max-w-[400px] 2xl:min-w-[450px] 2xl:max-w-[500px] flex-col p-3 sm:p-4 rounded-md hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col items-center w-full mt-3">
        
        <a
          className="text-white text-xs sm:text-sm break-all hover:text-blue-400 transition-colors duration-200"
          href={`https://sepolia.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          From: {addressFrom.slice(0, 6)}...{addressFrom.slice(38, 42)}
        </a>
        <a
          className="text-white text-xs sm:text-sm mb-4 break-all hover:text-blue-400 transition-colors duration-200"
          href={`https://sepolia.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          To: {addressTo.slice(0, 6)}...{addressTo.slice(38, 42)}
        </a>
        <p className="text-white font-light text-xs sm:text-sm text-center px-2 line-clamp-2">{message}</p>
        <img src={gifUrl || url} alt="gif" className="w-full h-auto rounded-md mt-2 object-cover" />
      </div>

      <div className="bg-black p-2 sm:p-3 px-3 sm:px-4 lg:px-6 w-full rounded-3xl mt-4 sm:mt-5 shadow-2xl">
        <p className="text-white font-bold text-sm sm:text-base lg:text-lg text-center">Amount: {amount} ETH</p>
      </div>

      <div className="bg-black p-2 sm:p-3 px-3 sm:px-4 lg:px-6 w-full rounded-3xl mt-3 sm:mt-4 shadow-2xl">
        <p className="text-gray-400 font-light text-xs sm:text-sm mt-1 sm:mt-2 text-center">Time: {timestamp}</p>
        <p className="text-gray-400 font-light text-xs sm:text-sm mt-1 sm:mt-2 text-center truncate">Keyword: {keyword}</p>
      </div>
    </div>
  );
};

const Transactions = () => {

  const { currentAccount, transactions, isLoading } = useContext(TransactionConnect);

  return (
    <div className="flex w-full justify-center items-center gradient-bg-transactions min-h-screen px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
        {currentAccount ? (
          <>
            <h3 className="text-white text-2xl sm:text-3xl text-center my-2 font-bold">Latest Transactions</h3>

            {isLoading && <Loader />}

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-10">
          
              {[...transactions].reverse().slice(0, 3).map((transaction: any, index: number) => (
                <TransactionCard key={`${transaction.timestamp}-${index}`} {...transaction} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-10">
              {[...transactions].reverse().slice(3, 6).map((transaction: any, index: number) => (
                <TransactionCard key={`${transaction.timestamp}-${index}-2`} {...transaction} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-white text-2xl sm:text-3xl text-center my-2 font-bold">
              Connect your account to see the latest transactions
            </h3>
            <div className="h-[1px] w-full max-w-md mx-auto border-t border-gray-800 my-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;