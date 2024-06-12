import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhyMe from "./pages/WhyMe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/why-me" element={<WhyMe />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
