import React from 'react';
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
            <li>
              <a href={iten.rota} key={iten.id}>
                {iten.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Menutop;
