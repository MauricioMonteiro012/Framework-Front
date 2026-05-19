import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

export default function CadastroSeller() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeLoja, setNomeLoja] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviando o objeto completo com os atributos que a API espera
      await api.post('/api/sellers', { 
        nome, 
        email, 
        senha,
        nome_loja: nomeLoja,
        cnpj,
        telefone
      });
      
      alert('Registo de Seller efetuado com sucesso! Vamos para a ativação da conta.');
      navigate('/ativacao'); 
    } catch (error) {
      console.error(error);
      alert('Erro ao efetuar o cadastro do Seller. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 w-75 mx-auto">
        <h2 className="mb-4">Cadastro de Seller</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Nome Completo</label>
              <input 
                type="text" 
                className="form-control" 
                value={nome}
                onChange={(e) => setNome(e.target.value)} 
                required 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">E-mail Corporativo</label>
              <input 
                type="email" 
                className="form-control" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Nome da Loja / Razão Social</label>
              <input 
                type="text" 
                className="form-control" 
                value={nomeLoja}
                onChange={(e) => setNomeLoja(e.target.value)} 
                required 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">CNPJ</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="00.000.000/0001-00"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Telefone de Contacto</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="(11) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)} 
                required 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Palavra-passe (Senha)</label>
              <input 
                type="password" 
                className="form-control" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)} 
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Registar Seller
          </button>
        </form>
        
        <div className="text-center">
          <Link to="/">Já tem uma conta? Inicie sessão aqui</Link>
        </div>
      </div>
    </div>
  );
}