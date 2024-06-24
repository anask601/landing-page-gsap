import "./App.css";
import CardSection from "./components/cardsection/CardSection";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/herosection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import YtFrame from "./components/yt-frame/YtFrame";

function App() {
  return (
    <div className="main-container">
      <article className="nav-hero-section">
        <Navbar />
        <HeroSection />
        <CardSection />
        <YtFrame />
        <Footer />
      </article>
    </div>
  );
}

export default App;
