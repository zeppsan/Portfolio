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
              <p className="text-4xl text-gray-500 font-bold">Hello!👋 I&apos;m</p>
              <p className="text-4xl text-gray-500 font-bold">Eric Qvarnström</p>
              <p className="mt-1 bg-blue-300 inline-block px-4 text-sm text-white rounded-md ">Junior Fullstack Developer</p>
              <p className="text-xl text-gray-500 font-bold mt-3">A creative code-loving macgyver-like developer from Sweden. Want to know more? Please contact me and let me introduce myself properly!</p>

              <div className="mt-3 pb-10">
                <button className="bg-blue-400 text-gray-200 font-bold text-xl p-2 px-5 shadow transition-all hover:shadow-xl hover:text-white rounded-md" onClick={togglePopup}>Lets Talk</button>
                <button className="bg-white border shadow text-blue-400 font-bold text-xl p-2 px-5 mx-2 lg:mx-8 transition-all hover:shadow-lg hover:text-blue-500 rounded-md" onClick={portfolio}>Portfolio</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center justify-center md:justify-end">
              <Image src="/eric.png" className="w-1/3 mt-40 md:mt-0 md-mt-0 md:w-2/3" alt="Eric Qvarnström"/>
              <div className="py-4">
                <PortfolioLanguage language="javascript"/>
                <PortfolioLanguage language="php"/>
                <PortfolioLanguage language="laravel"/>
                <PortfolioLanguage language="csharp"/>
                <PortfolioLanguage language="nodejs"/>
                <PortfolioLanguage language="mysql"/>
                <PortfolioLanguage language="express"/>
                <PortfolioLanguage language="react"/>
                <PortfolioLanguage language="stripe"/>
                <PortfolioLanguage language="sequelize"/>
                <PortfolioLanguage language="ubuntu"/>
                <PortfolioLanguage language="docker"/>
                <PortfolioLanguage language="apple"/>
                <PortfolioLanguage language="whmcs"/>
              </div>
            </div>
            {showPopup == true? <Popup close={togglePopup} />: null}
          </motion.div>
      </DefaultLayout>
  )
}
