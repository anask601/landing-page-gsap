import "./App.css";
import HeroSection from "./components/herosection/HeroSection";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="main-container">
      <article className="nav-hero-section">
        <Navbar />
        <HeroSection />
      </article>
    </div>
  );
}

export default App;
