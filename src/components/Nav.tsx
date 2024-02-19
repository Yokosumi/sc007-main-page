import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <>
            <div className="">
                <NavLink to={'/projects'}>Projects </NavLink>
                <NavLink to={'/tutorials'}>Tutorials</NavLink>
            </div>
        </>
    )
}
