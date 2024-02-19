import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from './App.tsx'
import { ErrorPage } from './pages/ErrorPage.tsx'
import { WelcomePage } from './pages/WelcomePage.tsx'
import { ProjectsPage } from './pages/ProjectsPage.tsx'
import { TutorialPage } from './pages/TutorialPage.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: '/welcome',
                element: <WelcomePage />,
            },
            {
                path: 'projects',
                element: <ProjectsPage />,
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
