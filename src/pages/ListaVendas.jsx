import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export default function ListaVendas() {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    async function carregarVendas() {
      try {
        // Assume-se que o backend tem um GET /api/sales para listar as vendas
        const response = await api.get('/api/sales');
        setVendas(response.data);
      } catch (error) {
        console.error("Erro ao carregar histórico de vendas:", error);
      }
    }
    carregarVendas();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Histórico de Vendas</h2>
        <Link to="/cadastro-venda" className="btn btn-info text-white">+ Nova Venda</Link>
      </div>

      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID Venda</th>
            <th>ID Produto</th>
            <th>Quantidade</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {vendas.length > 0 ? (
            vendas.map((venda, index) => (
              <tr key={index}>
                <td>{venda.id || index + 1}</td>
                <td>{venda.produto_id}</td>
                <td>{venda.quantidade}</td>
                <td>{venda.data || 'Hoje'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">Nenhuma venda registada.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}