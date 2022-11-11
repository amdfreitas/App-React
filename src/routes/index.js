import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menutop from '../components/menutop';
import CadastroProd from '../page/produto/cadastro';

function RouterApp() {
  return (
    <BrowserRouter>
      <Menutop />
      <Routes>
        <Route path="produto/">
          <Route path="cadastro" element={<CadastroProd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
