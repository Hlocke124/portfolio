import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';

function App() {

    return (
        <div className="relative h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-base-100"/>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App;
