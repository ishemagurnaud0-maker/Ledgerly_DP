import {BsShieldFillCheck } from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri' 

const ServiceCard = ({icon,title,subtitle,color}:{icon:React.ReactNode,title:string,subtitle:string,color:string}) => (
<div className='flex flex-row justify-start items-center white-glassmorphism p-3 sm:p-4 m-2 cursor-pointer hover:shadow-xl transition-shadow duration-300 w-full max-w-sm'>
  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center flex-shrink-0 ${color}`}>
    {icon}
  </div>
  <div className="ml-3 sm:ml-5 flex flex-col flex-1 min-w-0">
    <h2 className="text-white text-lg sm:text-xl font-semibold truncate">{title}</h2>
    <p className="text-white text-sm sm:text-base opacity-80 line-clamp-2">{subtitle}</p>
  </div>                                                                                            
</div>
)


const Services = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services h-auto min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-12">
        <div className="flex-1 flex flex-col justify-start items-start mb-8 lg:mb-0 lg:mr-8">  
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-gradient py-2 text-center lg:text-left">Services that we <br /> continue to improve</h1>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center w-full max-w-md mx-auto lg:mx-0">
          <div className="w-full space-y-4">
            <ServiceCard
              color="bg-[#2952E3]"
              title="Security Guaranteed"
              icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and quality of our products."
            />
            <ServiceCard
              color="bg-[#8945F8]"
              title="Best Exchange Rates"
              icon={<BiSearchAlt fontSize={21} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and quality of our products."
            />
            <ServiceCard
              color="bg-[#F84550]"
              title="Fastest Transactions"
              icon={<RiHeart2Fill fontSize={21} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and quality of our products."
            />  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services