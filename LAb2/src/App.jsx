import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";

import "./App.css";

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>

      <div className={theme}>

        <Navbar
          theme={theme}
          setTheme={setTheme}
        />

        <Routes>

          <Route
            path="/"
            element={<Navigate to="/home" />}
          />

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:projectId"
            element={<ProjectDetails />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<Home />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;