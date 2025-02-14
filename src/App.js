import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Wedding from "./pages/Wedding";
import Games from "./pages/Games";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.pathname === "/wedding") {
      window.location.href = "https://toourguest.com/cards/jolizzy";
    }
  }, []);

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
