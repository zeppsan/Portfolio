import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import DefaultLayout from '../src/layouts/default'
import ExperienceItem from '../src/components/Experiences/ExperienceItem'


export default function Home() {

    const [experiences, setExperiences] = useState([]);
    const [isLoading, setLoading] = useState(true);

    let worklifeDelay = 0, educationDelay = 0;

    useEffect(() => {
        fetch('/api/experiences')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setExperiences(res.data);
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, []);

    if(isLoading)
        return "loading";

    if(experiences.length == 0)
        return "empty"

    return (
        <DefaultLayout>
        <div className="w-full md:w-4/5 lg:w-2/3 md:mx-auto flex flex-col md:flex-row pt-20 md:pt-40 h-screen md:text-left px-3 md:px-0">
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0 pb-10">
                <h2 className="text-4xl text-gray-500 font-bold text-center">Work Life</h2>
                <hr className="w-1/2 mx-auto"></hr>
                    {!isLoading? experiences.map(item => {
                        const fields = item.attributes
                        const logo = fields.logo.data.attributes.url
                        worklifeDelay += 0.1

                        if(fields.type == "worklife")
                            return (
                                <motion.div
                                    initial={{x:-220, opacity: 0}}
                                    animate={{x:0, opacity: 1}}
                                    transition={{duration: 0.7, delay: worklifeDelay}}
                                    key={Math.random()}
                                >
                                    <ExperienceItem title={fields.title} content={fields.content} period={fields.period} image={process.env.NEXT_PUBLIC_API_URL + logo} role={fields.role}/>
                                </motion.div>
                            );
                    }): null}
                </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <h2 className="text-4xl text-gray-500 font-bold text-center">Education</h2>
                <hr className="w-1/2 mx-auto"></hr>
                <div className="px-3">
                    {!isLoading? experiences.map(item => {
                        const fields = item.attributes
                        const logo = fields.logo.data.attributes.url
                        educationDelay += 0.1;
                        if(fields.type == "education")
                            return (
                                <motion.div
                                    initial={{x:-120, opacity: 0}}
                                    animate={{x:0, opacity: 1}}
                                    transition={{duration: 0.7, delay: educationDelay}}
                                    key={Math.random()}
                                >
                                    <ExperienceItem title={fields.title} content={fields.content} period={fields.period} image={process.env.NEXT_PUBLIC_API_URL + logo} role={fields.role}/>
                                </motion.div>
                            );
                    }): null}
                </div>
            </div>
            </div>
        </DefaultLayout>
    )
        

    
  
}