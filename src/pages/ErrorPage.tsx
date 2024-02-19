import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <>
            <div className="p-12 text-6xl">
                <p>
                    404: page not found - return to{' '}
                    <NavLink to="/">Welcome Page </NavLink>
                </p>
            </div>
        </>
    )
}
