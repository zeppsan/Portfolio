import Slider from "react-slick"
import {useRef} from "react"
import Image from 'next/image'

const ImageCarousel = (props) => {

    const sliderRef = useRef();
    const back = () => sliderRef.current.slickPrev();
    const next = () => sliderRef.current.slickNext();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    }

    return (
        <>
        <Slider ref={sliderRef} settings={settings} className="">
            {props.images.map(item => {
                return (
                    <div key={Math.random()} className="h-full"><img layout='fill' src={process.env.NEXT_PUBLIC_API_URL + item} className="w-full h-full" alt="Portfolio image"/></div>
                )
            })}
        </Slider>
        <div className="hidden md:flex justify-center space-x-5">
            <button className="bg-slate-400 shadow-lg text-gray-50 rounded-sm px-2 hover:bg-slate-500 hover:text-white hover:shadow-xl transition-all" onClick={back}>Previous</button>
            <button className="bg-slate-400 shadow-lg text-gray-50 rounded-sm px-2 hover:bg-slate-500 hover:text-white hover:shadow-xl transition-all" onClick={next}>Next</button>
        </div>
        <div className="flex md:hidden justify-center space-x-5">
            <p className="text-slate-300">(Swipe to change image)</p>
        </div>
        </>
    );
}

export default ImageCarousel