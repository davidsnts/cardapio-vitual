import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ProdutoSelecionado from './pages/ProdutoSelecionado';
import Login from './pages/Login';
import Register from './pages/Register'
import NotFound from './components/NotFound';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/produto" element={<ProdutoSelecionado />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastrar' element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
