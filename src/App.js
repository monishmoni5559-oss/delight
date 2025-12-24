import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Earing from './pages/Earing';
import Ring from "./pages/Ring";
import Bangel from "./pages/Bangel";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cartpage from './pages/Cartpage'
import Upload from './pages/Upload';
import Get from './pages/Get';
import Edit from './pages/Edit';
import Form from './pages/Form';
import Singlecrud from './pages/Singlecrud';
import Register from './pages/Registeration';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />

          <Route path='/rings' element={
            <ProtectedRoute>
              <Ring />
            </ProtectedRoute>
          } />
          <Route path='/earing' element={
            <ProtectedRoute>
              <Earing />
            </ProtectedRoute>
          } />
          <Route path='/chain' element={
            <ProtectedRoute>
              <Bangel />
            </ProtectedRoute>
          } />
          <Route path='/cart' element={
            <ProtectedRoute>
              <Cartpage />
            </ProtectedRoute>
          } />
          <Route path='/upload' element={<Upload />} />
          <Route path='/getfile' element={<Get />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/form/:id' element={<Form />} />
          <Route path='/singelcrud/:id' element={<Singlecrud />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>} />
        </Routes>

        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
