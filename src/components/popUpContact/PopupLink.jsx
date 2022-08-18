const PopUpLink = (props) => {
    return (
        <a className="py-3 px-6 bg-blue-400 text-white rounded-md shadow-md mt-6" target={props.target} href={props.link}>{props.children}</a>
    );
}

export default PopUpLink