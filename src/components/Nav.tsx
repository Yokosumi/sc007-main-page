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
        <ul className="flex justify-center gap-4 p-6 font-mono">
            {routes.map((route) => (
                <Button className="pb-4 text-2xl" variant={'link'} size={'lg'}>
                    <NavLink
                        to={route.path}
                        className={({ isActive }) =>
                            `${isActive ? 'bg-orange-500 ' : 'text-black '} rounded p-2  transition duration-500 ease-in-out`
                        }
                    >
                        {route.name}
                    </NavLink>
                </Button>
            ))}
        </ul>
    )
}
