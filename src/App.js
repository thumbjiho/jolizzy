import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wedding from "./pages/Wedding";
import Games from "./pages/Games";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Navigate to="/wedding" replace />} />
      </Routes>
    </Router>
  );
}
