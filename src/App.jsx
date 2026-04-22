import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoriesProvider } from "./context/StoriesContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShareStory from "./pages/ShareStory";
import Stories from "./pages/Stories";
import About from "./pages/About";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <StoriesProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/share" element={<ShareStory />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </StoriesProvider>
    </BrowserRouter>
  );
}
