import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api'; // Sua conexão com o backend
// import '../style.css'; // Descomente isso depois que você mover o arquivo CSS para a pasta src

export default function Login() {
  // Guardando o que o usuário digita nos inputs
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  // Função que assume o controle quando o botão "Entrar" é clicado
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    try {
      // Faz o POST para o seu backend
      const response = await api.post('/api/auth/login', { email, senha });
      
      // Salva o token e joga para o dashboard
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); 
      
    } catch (error) {
      alert("Erro ao fazer login. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login do Seller</h2>
        
        {/* Formulário controlado pelo React */}
        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              name="senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn-primary">Entrar</button>
        </form>

        <p className="register-link">
          Ainda não tem conta? <Link to="/cadastro-seller">Cadastre-se aqui</Link>
        </p>
      </div>
    </div>
  );
}