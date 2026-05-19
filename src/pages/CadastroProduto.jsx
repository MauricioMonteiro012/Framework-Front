import { useState } from 'react';
import api from '../api';

export default function CadastroProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [status, setStatus] = useState('Ativo'); // Já começa como Ativo por padrão
  const [imagem, setImagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await api.post('/api/products', {
        nome,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade),
        status,
        imagem
      });
      
      alert('Produto cadastrado com sucesso!');
      
      // Limpa os campos da tela
      setNome('');
      setPreco('');
      setQuantidade('');
      setStatus('Ativo');
      setImagem('');
      
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar o produto. Verifique a API.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 w-75 mx-auto">
        <h2 className="mb-4">Cadastrar Novo Produto</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome do Produto</label>
            <input 
              type="text" 
              className="form-control" 
              value={nome}
              onChange={(e) => setNome(e.target.value)} 
              required 
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Preço (R$)</label>
              <input 
                type="number" 
                step="0.01" 
                className="form-control" 
                value={preco}
                onChange={(e) => setPreco(e.target.value)} 
                required 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Quantidade em Estoque</label>
              <input 
                type="number" 
                className="form-control" 
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Status</label>
              <select 
                className="form-select" 
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">URL da Imagem</label>
              <input 
                type="url" 
                className="form-control" 
                placeholder="https://link-da-imagem.com/foto.jpg"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)} 
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Salvar Produto
          </button>
        </form>
      </div>
    </div>
  );
}