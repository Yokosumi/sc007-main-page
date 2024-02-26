import { Nav } from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className="text-xl text-primary-foreground">
            <Nav />
            <main className="max-h-full  px-20 py-4 font-mono">
                <Outlet />
            </main>
        </div>
    )
}

export default App
