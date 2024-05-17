import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <Link href='' className='logo'>MyBlog</Link>
            <nav>
                <Link to={'/login'}>login</Link>
                <Link to={'/register'}>Register</Link>
            </nav>
        </header>
    )
}