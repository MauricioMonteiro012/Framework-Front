import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="container mt-4">
      <h2>Painel de Controle (Dashboard)</h2>
      <hr />
      
      {/* Cards de Relatório Rápidos */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total de Vendas</h5>
              <p className="card-text fs-3">R$ 4.500,00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Produtos Ativos</h5>
              <p className="card-text fs-3">12</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Alertas de Estoque</h5>
              <p className="card-text fs-3">3 itens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de Acesso Rápido */}
      <div className="card p-3">
        <h4>Ações Rápidas</h4>
        <div className="d-flex gap-2 mt-2">
          <Link to="/produtos" className="btn btn-outline-primary">Ver Produtos</Link>
          <Link to="/cadastro-produto" className="btn btn-outline-success">Novo Produto</Link>
          <Link to="/cadastro-venda" className="btn btn-outline-info">Registrar Venda</Link>
        </div>
      </div>
    </div>
  );
}