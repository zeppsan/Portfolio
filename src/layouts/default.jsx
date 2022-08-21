import Navbar from "../components/Navbar/Index";
import Head from 'next/head'

const DefaultLayout = (props) => {
    return (
        <>
            <Head>
                <title>Portfolio | Eric Qvarnström</title>
            </Head>
            <Navbar />
            {props.children}
        </>
    );
}
export default DefaultLayout