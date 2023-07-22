import PortfolioLanguage from "./PortfolioLanguage";
import ImageCarousel from '../../../src/components/Slider/Index'

const PortfolioItem = (props) => {
    return (
        <div className="w-full lg:w-4/5 lg:mx-auto flex flex-col lg:flex-row justify-around lg:text-left text-center mt-10 shadow-2xl rounded-xl p-5 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="p-3">
                    <h3 className="text-2xl text-gray-500 font-bold hidden lg:block">{props.title}</h3>
                    <p className="text-gray-500 font-bold">{props.roles}</p>
                    <p className="text-md text-gray-500 mt-2 pr-3">{props.content}</p>

                    <div className=" mt-3">
                        {props.languages.map(lang => {
                            return (<PortfolioLanguage key={Math.random()} language={lang.language} imgext={lang.imagext}/>)
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 ">
                <p className="text-2xl text-gray-500 font-bold block pb-2 lg:hidden">{props.title}</p>
                <ImageCarousel key={Math.random()} images={props.images} />
            </div>
        </div>
    );
}

export default PortfolioItem