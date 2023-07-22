import DefaultLayout from '../src/layouts/default'
import { motion } from 'framer-motion'
import {useRouter} from "next/router"
import {useState} from 'react'
import Image from 'next/image'
import PortfolioLanguage from '../src/components/Portfolio/PortfolioLanguage'
import Popup from '../src/components/popUpContact/Index'

export default function Home() {

  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const portfolio = (e) => {
    e.preventDefault();
    router.push('/portfolio')
  }


  return (
      <DefaultLayout>
          <motion.div 
          initial={{ y:-200, opacity: 0 }}
          animate={{ y:0, opacity: 1 }} 
          transition={{ stiffness: 100, duration: 0.6}}
          className="w-full md:w-4/5 lg:w-2/3 md:mx-auto flex flex-col justify-around md:flex-row items-center h-screen md:text-left text-center">
            <div className="w-4/5 md:w-1/2 order-2 md:order-1">
              <h1 className="text-4xl text-gray-500 font-bold">Hello!👋 I&apos;m <br/>Eric Qvarnström</h1>
              <p className="mt-1 bg-blue-300 inline-block px-4 text-sm text-white rounded-md ">Azure Consultant</p>
              <h2 className="text-xl text-gray-500 font-bold mt-3">Are you ready to venture into a world of boundless creativity and Azure-driven possibilities? Don&apos;t hesitate to reach out for a conversation that unveils a world of innovation and passion. Let&apos;s craft a future where technology and imagination merge seamlessly!</h2>

              <div className="mt-3 pb-10">
                <button className="bg-blue-400 text-gray-200 font-bold text-xl p-2 px-5 shadow transition-all hover:shadow-xl hover:text-white rounded-md" onClick={togglePopup}>Lets Talk</button>
                <button className="bg-white border shadow text-blue-400 font-bold text-xl p-2 px-5 mx-2 lg:mx-8 transition-all hover:shadow-lg hover:text-blue-500 rounded-md" onClick={portfolio}>Portfolio</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center justify-center md:justify-end">
              <img src="/eric.png" width="100px" height="100px" className="w-1/3 mt-40 md:mt-0 md-mt-0 md:w-2/3" alt="Eric Qvarnström"/>
              <div className="py-4">
                <PortfolioLanguage imgext="png" language="javascript"/>
                <PortfolioLanguage imgext="png" language="php"/>
                <PortfolioLanguage imgext="png" language="laravel"/>
                <PortfolioLanguage imgext="png" language="csharp"/>
                <PortfolioLanguage imgext="png" language="nodejs"/>
                <PortfolioLanguage imgext="png" language="mysql"/>
                <PortfolioLanguage imgext="png" language="express"/>
                <PortfolioLanguage imgext="png" language="react"/>
                <PortfolioLanguage imgext="png" language="ubuntu"/>
                <PortfolioLanguage imgext="png" language="docker"/>
                <PortfolioLanguage imgext="svg" language="function_apps"/>
                <PortfolioLanguage imgext="svg" language="VM's"/>
                <PortfolioLanguage imgext="svg" language="app_Services"/>
                <PortfolioLanguage imgext="svg" language="Active_Directory"/>
                <PortfolioLanguage imgext="svg" language="Api_Management"/>
                <PortfolioLanguage imgext="svg" language="CosmosDB"/>
                <PortfolioLanguage imgext="svg" language="Logic_Apps"/>
                <PortfolioLanguage imgext="svg" language="Service_Bus"/>
              </div>
            </div>
            {showPopup == true? <Popup close={togglePopup} />: null}
          </motion.div>
      </DefaultLayout>
  )
}
