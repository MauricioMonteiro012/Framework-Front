import { useState } from 'react';
import api from '../api';

export default function CadastroVenda() {
  const [produtoId, setProdutoId] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/sales', { 
        produto_id: produtoId, 
        quantidade: parseInt(quantidade) 
      });
      alert('Venda registada com sucesso!');
      setProdutoId('');
      setQuantidade('');
    } catch (error) {
      alert('Erro ao registar a venda. Verifique o ID do produto e o stock.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 w-50 mx-auto">
        <h2 className="mb-4">Registar Nova Venda</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">ID do Produto</label>
            <input 
              type="text" 
              className="form-control" 
              value={produtoId}
              onChange={(e) => setProdutoId(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Quantidade Vendida</label>
            <input 
              type="number" 
              className="form-control" 
              value={quantidade}
              min="1"
              onChange={(e) => setQuantidade(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-info w-100 text-white">Confirmar Venda</button>
        </form>
      </div>
    </div>
  );
}