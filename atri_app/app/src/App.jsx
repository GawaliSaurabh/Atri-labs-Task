import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Hero from "./pages/Hero.jsx";
import Hero from "./pages/Hero.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/Hero" element={<Hero />} />
<Route path="/Hero" element={<Hero />} />
    </Routes>
  );
}
