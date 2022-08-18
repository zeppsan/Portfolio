import PortfolioLanguage from "./PortfolioLanguage";
import ImageCarousel from '../../../src/components/Slider/Index'

const PortfolioItem = (props) => {
    return (
        <div className="w-full md:w-4/5 md:mx-auto flex flex-col md:flex-row justify-around md:text-left text-center mt-10 shadow-xl rounded-xl p-5 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="p-3">
                    <p className="text-2xl text-gray-500 font-bold hidden md:block">{props.title}</p>
                    <p className="text-gray-500 font-bold">{props.roles}</p>
                    <p className="text-md text-gray-500 mt-2 pr-3">{props.content}</p>

                    <div className="ml-0 mt-3">
                        {props.languages.map(lang => {
                            return (<PortfolioLanguage key={Math.random()} language={lang}/>)
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 ">
            <p className="text-2xl text-gray-500 font-bold block pb-2 md:hidden">{props.title}</p>
                <ImageCarousel key={Math.random()} images={props.images} />
            </div>
        </div>
    );
}

export default PortfolioItem