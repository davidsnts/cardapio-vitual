import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ProdutoSelecionado from './pages/ProdutoSelecionado';
import Login from './pages/Login';
import Register from './pages/Register'
import NotFound from './components/NotFound';
import { AuthProvider } from './Context/AuthContext';
import Carrinho from './pages/Carrinho';
import { CartProvider } from './Context/CartContext';
import ProdutoSelecionadoSucesso from './pages/ProdutoSelecionadoSucesso';
import ConfirmarPedido from './pages/ConfirmaPedido';
import EnderecoPedido from './pages/EnderecoPedido';
import ProtectedRoute from './routes/ProtectedRoute';
function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/produto/:id" element={<ProtectedRoute><ProdutoSelecionado /></ProtectedRoute>} />
            <Route path="/produtoSelecionadoSucesso" element={<ProtectedRoute><ProdutoSelecionadoSucesso /></ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastrar' element={<Register />} />
            <Route path='/carrinho' element={<ProtectedRoute><Carrinho /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
            <Route path='/confirmarPedido' element={<ProtectedRoute><ConfirmarPedido /></ProtectedRoute>} />
            <Route path='/enderecoPedido' element={<ProtectedRoute> <EnderecoPedido /></ProtectedRoute>} />
          </Routes></CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
