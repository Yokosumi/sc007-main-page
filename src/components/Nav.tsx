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
        <div className="mx-auto mt-4 flex  w-full justify-center rounded border-4 bg-blue-400 px-2 ring-4 ring-pink-300">
            <ul className="my-4 flex gap-6 py-4 font-mono">
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
                                    ? 'before:content-simpleStar border-b-4 border-yellow-500 font-semibold text-yellow-400 transition duration-500 ease-in'
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
