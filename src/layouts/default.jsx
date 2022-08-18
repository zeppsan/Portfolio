import Navbar from "../components/Navbar/Index";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
}
export default DefaultLayout