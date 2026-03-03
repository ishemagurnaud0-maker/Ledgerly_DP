import {BsShieldFillCheck } from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri' 

const ServiceCard = ({icon,title,subtitle,color}:{icon:React.ReactNode,title:string,subtitle:string,color:string}) => (
<div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
  <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
    {icon}
  </div>
  <div className="ml-5 flex flex-col">
    <h2 className="text-white text-xl">{title}</h2>
    <p className="text-white text-sm">{subtitle}</p>
  </div>                                                                                            
</div>
)


const Services = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center gradient-bg-services h-auto">
      <div className="flex mf:flex-row flex-row items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">  
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-2">Services that we <br /> continue to improve</h1>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center mt-10 mf:mt-0">
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
    </>
    
  )
}

export default Services