import "./App.css";
import NavBar from "./Commponent/navbar/NavBar";
import Home from "./Commponent/home/Home";
import About from "./Commponent/about/About";
import Services from "./Commponent/services/Services"
import Blog from "./Commponent/blog/Blog";
import Pricing from "./Commponent/pricing/Pricing";
import Contact from "./Commponent/contact/Contact";
import Footer from "./Commponent/footer/Footer";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
