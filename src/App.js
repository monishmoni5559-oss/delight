import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Earing from './pages/Earing';
import Ring from "./pages/Ring";
import Bangel from "./pages/Bangel";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Ring />
      {/* <Bangel /> */}
      {/* <Earing /> */}
      <Footer />

    </div>
  );
}

export default App;
