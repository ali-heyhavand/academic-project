import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home"
import Blog from "./pages/blog/Blog"
import Course from "./pages/course/Course"
import Panel from "./pages/panel/Panel"
import Login from "./pages/login/Login"
function App () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/courses/:courseId" element={<Course/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/panel" element={<Panel/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App