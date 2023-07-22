import Image from 'next/image'

const PortfolioLanguage = ({language, imgext})=> {

    let lang = language.charAt(0).toUpperCase() + language.slice(1);
    lang = lang.replace('_', ' ');

    return (
        <div className="inline-block px-1">
            <div className="inline-block items-center mt-2 bg-slate-200 w-auto shadow-md hover:shadow-lg hover:bg-slate-300 transition-all">
                <img height="24px" width="24px" src={"/logos/" + language + "." + imgext} className="h-6 w-6 inline" alt="Logo of language or framework"/>
                <p className="inline pr-3 pl-2">{language.charAt(0).toUpperCase() + language.slice(1)}</p>
            </div>
        </div>
        
    );
}

export default PortfolioLanguage