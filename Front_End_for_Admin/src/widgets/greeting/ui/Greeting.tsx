import { Link } from "react-router-dom"

export const Greeting = () => {
    return (
        <>
            <span>Please Log In</span>
            <Link to='/login'>Log In</Link>
            <span>Or Sign Up</span>
            <Link to='/signup'>Sign Up</Link>
        </>
    )
}