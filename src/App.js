import {Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses.js";
import About from "./pages/about/About.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:courseId" element={<Course />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/About" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
