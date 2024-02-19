import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export const Nav = () => {
    const routes = [
        {
            path: '/welcome',
            name: 'Welcome',
        },
        {
            path: '/projects',
            name: 'Projects',
        },
        {
            path: '/tutorials',
            name: 'Tutorials',
        },
    ]

    return (
        <>
            <ul className="border-3 my-4 flex gap-4  border-4 py-4">
                {routes.map((route) => (
                    <Button variant={'link'} size={'lg'}>
                        <NavLink
                            to={route.path}
                            className={({ isActive }) =>
                                isActive ? 'font-bold text-white' : 'text-black'
                            }
                        >
                            {route.name}
                        </NavLink>
                    </Button>
                ))}
            </ul>
        </>
    )
}
