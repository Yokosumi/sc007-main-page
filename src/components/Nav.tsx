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
        <div className="">
            <ul className="flex justify-end  px-6 pt-6 font-mono">
                {routes.map((route) => (
                    <Button
                        className="pb-4 text-2xl"
                        variant={'link'}
                        size={'lg'}
                    >
                        <NavLink
                            to={route.path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-orange-500 text-black transition duration-500 ease-in '
                                    : 'text-blue-700 transition duration-500 ease-out'
                            }
                        >
                            {route.name}
                        </NavLink>
                    </Button>
                ))}
            </ul>
        </div>
    )
}
