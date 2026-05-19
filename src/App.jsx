import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CadastroProduto from './pages/CadastroProduto';
import ListaProdutos from './pages/ListaProdutos';

// As 4 novas páginas
import CadastroSeller from './pages/CadastroSeller';
import AtivacaoSeller from './pages/AtivacaoSeller';
import CadastroVenda from './pages/CadastroVenda';
import ListaVendas from './pages/ListaVendas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-seller" element={<CadastroSeller />} />
        <Route path="/ativacao" element={<AtivacaoSeller />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        
        <Route path="/vendas" element={<ListaVendas />} />
        <Route path="/cadastro-venda" element={<CadastroVenda />} />

        {/* Qualquer outro endereço redireciona para o Login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;