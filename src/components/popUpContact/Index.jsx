import { motion } from 'framer-motion'
import PopUpLink from './PopupLink';

const Popup = (props) => {
    return (
        <motion.div 
        initial= {{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:.2}}
        className="h-screen w-full bg-black/80 fixed left-0 top-0 flex justify-center items-center">
            <motion.div 
            initial= {{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:.2, delay: .3}}
            className=" w-11/12 lg:w-4/5 xl:w-1/3 h-1/3 bg-white rounded-xl shadow-xl flex flex-col px-10 text-center">
                <p className="text-xl font-bold text-slate-600 mt-6">I&apos;m glad to hear that you want to talk to me!</p>
                <PopUpLink link="mailto:ericqvarnstrom@gmail.com">Ericqvarnstrom@gmail.com</PopUpLink>
                <PopUpLink link="tel:ericqvarnstrom@gmail.com">+46702258844</PopUpLink>
                <PopUpLink link="https://www.linkedin.com/in/ericqvarnström/" target="_blank">Linkedin</PopUpLink>

                <button className="mt-10" onClick={props.close}>Close</button>
            </motion.div>
        </motion.div>
    );
}

export default Popup