import {useState, useEffect} from 'react'

import DefaultLayout from '../src/layouts/default'
import ExperienceItem from '../src/components/Experiences/ExperienceItem'


export default function Home() {

    const [experiences, setExperiences] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/experiences')
        .then(res => res.json())
        .then(res => {
            setExperiences(res.data);
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, []);

    if(isLoading)
        return <DefaultLayout />;

    if(!isLoading){
        console.log(experiences);
        return (
            <DefaultLayout>
            <div className="w-full md:w-4/5 lg:w-2/3 md:mx-auto flex flex-col md:flex-row pt-20 md:pt-40 h-screen md:text-left px-3 md:px-0">
                <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0 pb-10">
                    <p className="text-4xl text-gray-500 font-bold text-center">Work Life</p>
                    <hr className="w-1/2 mx-auto"></hr>
                        {experiences.map(item => {
                            console.log(item);
                            const fields = item.attributes
                            const logo = fields.logo.data.attributes.url
                            if(fields.type == "worklife")
                                return <ExperienceItem title={fields.title} content={fields.content} period={fields.period} image={process.env.NEXT_PUBLIC_API_URL + logo}/>
                        })}
                    </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <p className="text-4xl text-gray-500 font-bold text-center">Education</p>
                    <hr className="w-1/2 mx-auto"></hr>
                    <div className="px-3">
                        {experiences.map(item => {
                            const fields = item.attributes
                            const logo = fields.logo.data.attributes.url
                            if(fields.type == "education")
                                return <ExperienceItem title={fields.title} content={fields.content} period={fields.period} image={process.env.NEXT_PUBLIC_API_URL + logo}/>
                        })}
                    </div>
                </div>
                </div>
            </DefaultLayout>
        )
    }
        

    
  
}