

const ExperienceItem = (props) => {
    return (
        <div className="grid grid-flow-col grid-cols-10 mt-3">
            <div className="col-span-1">
                <img src={"logos/" + props.image + ".png"} className="w-16"/>
            </div>
            <div className="col-span-9 flex flex-col">
                <p className="text-sm text-slate-700 font-bold px-2">{props.title}</p>
                <p className="text-sm text-slate-600 font-bold px-2">{props.period}</p>
                <p className="text-sm text-slate-600 px-2">{props.content}</p>
            </div>
        </div>
    );
}

export default ExperienceItem