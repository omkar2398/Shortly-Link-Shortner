import "./App.css";
import Home from "./components/Home/Index";
import Hero from "./components/Hero/Hero";
import LinkShortner from "./components/LinkShortner/LinkShortner";
import AdvancedStatistics from "./components/AdvancedStatistics/AdvancedStatistics";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Home />
        <Hero />
        <LinkShortner />
        <AdvancedStatistics />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
