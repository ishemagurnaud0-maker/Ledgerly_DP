import { useContext } from "react"
import { TransactionConnect } from "../context/TransactionConnect";
import transactions from "../utils/dummyData";
import { useState } from "react";
import { Loader } from "./";
import useFetch from "../hooks/useFetch";


const TransactionCard = ({addressTo,addressFrom,timestamp,message,keyword,amount,url}:{addressTo:string,addressFrom:string,timestamp:string,message:string,keyword:string,amount:string,url:string}) => {

const gifUrl = useFetch(keyword);

return(
<>
<div className='bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl'>
    <div className='flex flex-col items-center w-full mt-3'>
      <a className="text-white text-md" href={`https://ropsten.etherscan.io/address/${addressFrom}`} target='_blank' rel='noopener noreferrer'>
       From: {addressFrom.slice(0,6)}...{addressFrom.slice(39,42)}
      </a>
      <a className="text-white text-md md-4" href={`https://ropsten.etherscan.io/address/${addressTo}`} target='_blank' rel='noopener noreferrer'>
       To: {addressTo.slice(0,6)}...{addressTo.slice(39,42)}
      </a>
      <p className='text-white font-light text-sm'>{message}</p>
      <img src= {gifUrl || url} alt='gif' className='w-full h-auto'/>
    </div>
<div className='bg-black p-3 px-6 w-max rounded-3xl mt-5 shadow-2xl'>
  <p className='text-white font-bold text-lg'>Amount: {amount} ETH</p>
</div>
<div className="bg-black p-3 px-6 w-max rounded-3xl mt-5 shadow-2xl"> 
<p className='text-gray-400 font-light text-md mt-2'>
  Time:{timestamp}
</p>

<p className='text-gray-400 font-light text-md mt-2'>
  Keyword: {keyword}
</p>
</div>



  </div>

</>
)
  
}

const Transactions = () => {
  const {currentAccount} = useContext(TransactionConnect);
const [isLoading, setIsLoading] = useState(false);
  


  return (
   <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
    <div className='flex flex-col md:p-12 py-12 px-4'>
      {currentAccount ? (
        <>
       
        <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
         {setIsLoading(true)};
        {isLoading && <Loader font-size={35} />}
          
        <div className='flex flex-row justify-center items-center mt-10'>
          {transactions.reverse().slice(0,3).map((transaction) =>(
            <TransactionCard key={transaction.id} {...transaction}/>
          ))}
        </div>
          <div className='flex flex-row justify-center items-center mt-10'>
          {transactions.reverse().slice(3,6).map((transaction) =>(
            <TransactionCard key={transaction.id} {...transaction}/>
            
          ))}
          
        </div>
        {setIsLoading(false)};
        </>
      

      ) : (
        <div>
          <h3 className='text-white text-3xl text-center my-2'>Connect your account to see the latest transactions</h3>
          <div className="h-[1px] w-full border-t-1 border-b-1 border-gray-800 my-6" />
        </div>
        
      )}
    </div>
   </div> 
    
  )}
    
  

export default Transactions;