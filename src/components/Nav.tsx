import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <>
            <ul className="flex gap-4 border p-4">
                <li>
                    <NavLink to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects </NavLink>
                </li>
                <li>
                    <NavLink to="/tutorials">Tutorials</NavLink>
                </li>
            </ul>
        </>
    )
}
