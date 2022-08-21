import {useState, useEffect} from "react"

import DefaultLayout from '../src/layouts/default'
import PortfolioItem from '../src/components/Portfolio/PortfolioItem'

export default function Home() {

    const [portfolioItems, setPortfolioItems] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/portfolio-entries')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setPortfolioItems(res.data);
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, []);

    if(isLoading)
        return <DefaultLayout />;

    if(!isLoading)
        return (
            <DefaultLayout>

                <div className="pb-10 container mx-auto">
                    <div className="pt-20 w-4/5 mx-auto text-center">
                        <p className="text-4xl text-gray-500 font-semibold">Portfolio</p>
                        <p className="text-xl">These are some of the projects that I&apos;ve worked on that are worth mentioning.</p>
                    </div>

                    {portfolioItems.map(item => {
                        const fields = item.attributes
                        const images = fields.images.data.map(image => {
                            return image.attributes.url
                        })
                        return <PortfolioItem key={Math.random()} title={fields.title} roles={fields.roles} content={fields.content} languages={fields.Languages.Languages} images={images}/>
                    })}

                </div>

            </DefaultLayout>
    )
  
}
