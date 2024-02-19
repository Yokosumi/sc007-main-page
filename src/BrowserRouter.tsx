import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { Nav } from './components/Nav.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/welcome',
                element: <WelcomePage />,
            },
            {
                path: 'projects',
                element: <ProjectPage />,
            },
            {
                path: 'tutorials',
                element: <TutorialPage />,
            },
            {
                path: '/',
                element: <Navigate to="welcome" replace />,
            },
        ],
    },
])
