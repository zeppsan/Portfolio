import {useRouter} from "next/router"
import NavLink from "./NavLink";
import {useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = (props) => {

    const [showNav, setShowNav] = useState(false)
    const mobileNavRef = useRef()
    const router = useRouter();

    const goHome = () => router.push('/')


    const toggleNav = () => setShowNav(!showNav)
    useEffect(() => {
        const resizeFunction = () => {
            if(showNav)
                setShowNav(!showNav)
        }
        window.addEventListener('resize', resizeFunction)
    }, [showNav])

    return (
        <>
            <div className="w-full border-b border drop-shadow-md bg-white fixed z-20">
                <nav className="flex w-4/5 justify-between mx-auto lg:w-2/3 py-3">
                    <div className="">
                        <a onClick={goHome} className="text-2xl font-extrabold text-gray-700">Eric<span className="text-blue-500">.</span></a>
                    </div>
                    <div className="md:space-x-10 font-extrabold text-sm md:text-lg text-gray-700 md:items-center hidden md:block">
                        <NavLink href="/" className="hover:text-blue-500 transition-all">Home</NavLink>
                        <NavLink href="/experiences" className="hover:text-blue-500 transition-all">Work & Education</NavLink>
                        <NavLink href="/portfolio" className="hover:text-blue-500 transition-all">Portfolio</NavLink>
                    </div>
                </nav>
            </div>
            <motion.div 
            initial={{ x:700 }}
            animate={{ 
                x: showNav? 0: 700,
                opacity: showNav? 1: 0
            }}
            transition={{duration: 0.1}}
            className="md:hidden w-screen bg-red-100 z-20" ref={mobileNavRef} id="mobile-menu">
                <div className="flex flex-row items-center h-screen fixed w-4/5 right-0 bg-white z-20 space-y-5 text-2xl text-gray-500 font-semibold shadow-2xl">
                    <div className="flex flex-col mx-auto text-center text-4xl space-y-10">
                        <NavLink href="/" className="hover:text-blue-500 transition-all">Home</NavLink>
                        <NavLink href="/experiences" className="hover:text-blue-500 transition-all">Work & Education</NavLink>
                        <NavLink href="/portfolio" className="hover:text-blue-500 transition-all">Portfolio</NavLink>
                    </div>
                </div>
            </motion.div>
            <button aria-controls="mobile-menu" className="block md:hidden text-2xl mt-1 fixed right-6 z-30" onClick={toggleNav}><Hamburger  toggle={toggleNav} toggled={showNav}/></button>
        </>
        
    )
}

export default Navbar