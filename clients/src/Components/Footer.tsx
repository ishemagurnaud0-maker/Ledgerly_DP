import logo from "../../../assets/logo2.png"


const Footer = () => {
  return (
  <>
  <div className="w-full flex justify-center items-center flex-col p-4 sm:p-6 gradient-bg-footer">
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center my-4 space-y-6 lg:space-y-0">
      <div className='flex justify-center items-center lg:flex-1'>
        <img src={logo} alt='logo' className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain'/>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:flex-1'>
        <p className='text-white text-sm sm:text-base text-center cursor-pointer hover:text-blue-400 transition-colors duration-200'>Market</p>
        <p className='text-white text-sm sm:text-base text-center cursor-pointer hover:text-blue-400 transition-colors duration-200'>Exchange</p>
        <p className='text-white text-sm sm:text-base text-center cursor-pointer hover:text-blue-400 transition-colors duration-200'>Tutorials</p>
        <p className='text-white text-sm sm:text-base text-center cursor-pointer hover:text-blue-400 transition-colors duration-200'>Wallets</p>
      </div>
    </div>
    <div className='flex justify-center items-center flex-col mt-6 sm:mt-8 space-y-2'>
      <p className="text-white text-sm sm:text-base text-center font-medium"> Come Join Us</p>
      <p className="text-white text-sm sm:text-base text-center opacity-80"> Info@0xishgur.io</p>
    </div>
    <div className="w-full sm:w-[90%] max-w-4xl h-[0.25px] bg-gray-400 mt-6 sm:mt-8"/>
    <div className="w-full sm:w-[90%] max-w-4xl flex flex-col justify-center items-center mt-4 sm:mt-6 space-y-2">
       <p className="text-gray-400 text-xs sm:text-sm text-center">@Ledgerly 2026</p>
      <p className="text-gray-400 text-xs sm:text-sm text-center">All rights reserved</p>
    </div>
  </div>
  </>
  )
}

export default Footer