import Header from "./components/Header";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <HeroImage /> */}
      <Footer />
    </div>
  );
};

export default App;
