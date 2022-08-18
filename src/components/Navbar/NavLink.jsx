import { useRouter } from "next/router"

const NavLink = (props) => {
    const router = useRouter();
    let className = "hover:text-blue-500 transition-all"
    className += router.pathname == props.href? " text-blue-500": "";
    const linkClicked = (e) => {
        e.preventDefault()
        router.push(props.href)
    }
    return (
        <a onClick={linkClicked} className={className}>{props.children}</a>
    );
}

export default NavLink