import React from 'react';
import { Formulario } from './Components/Formulario';
import { Header } from './Components/Header';

function App() {
  return (
    <>
        <Header titulo="buscador de noticias"/>

        <div className="container white">
          <Formulario />
        </div>
    </>
  );
}

export default App;
