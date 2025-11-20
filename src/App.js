import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Earing from './pages/Earing';
import Ring from "./pages/Ring";
import Bangel from "./pages/Bangel";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rings' element={<Ring />} />
          <Route path='/Earing' element={<Earing />} />
          <Route path='/chain' element={<Bangel />} />
        </Routes>
        <Footer />

      </BrowserRouter>



    </div>
  );
}

export default App;
