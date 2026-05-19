import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function AtivacaoSeller() {
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/sellers/activate', { email, codigo_ativacao: codigo });
      alert('Conta ativada com sucesso! Já pode iniciar sessão.');
      navigate('/');
    } catch (error) {
      alert('Erro ao ativar conta. Verifique o código.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 w-50 mx-auto">
        <h2 className="mb-4">Ativar Conta</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            className="form-control mb-3" 
            placeholder="Seu E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <input 
            type="text" 
            className="form-control mb-3" 
            placeholder="Código de Ativação" 
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)} required />
          <button type="submit" className="btn btn-success w-100">Ativar Seller</button>
        </form>
      </div>
    </div>
  );
}