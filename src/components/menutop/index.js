import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Menutop() {
  const listMenu = [
    {
      id: 1,
      nome: 'Cadastro  de Produto',
      rota: '/produto/cadastro',
    },
    {
      id: 2,
      nome: 'Lista  de Produto',
      rota: '/produto/lista',
    },
  ];

  return (
    <div className="menucontainer">
      <div>
        <span>
          <h1>Lista de Loja</h1>
        </span>
      </div>
      <div>
        <ul className="menuitens">
          {listMenu.map((iten) => (
            <li key={iten.id}>
              <Link to={iten.rota}>{iten.nome}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Menutop;
