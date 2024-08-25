import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import Projects from "./pages/projects.jsx";
import Home from "./pages/home.jsx";
import Work from "./pages/work.jsx";
import Social from "./pages/social.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="work" element={<Work/>}/>
                        <Route path="projects" element={<Projects/>}/>
                        <Route path="social" element={<Social/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
