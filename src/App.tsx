import { Nav } from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            <Nav />
            <main className="max-h-full  px-20 py-4">
                <Outlet />
            </main>
        </>
    )
}

export default App
