import React, { useEffect, useState } from 'react';
import { Formulario } from './Components/Formulario';
import { Header } from './Components/Header';
import { ListadoNoticias } from './Components/ListadoNoticias';

function App() {

  const [ categoria, setCategoria ] = useState('');
  const [ noticias, setNoticias ] = useState([]);

  useEffect(() => {
    
    const consultarAPI = async() => {
      const apiKey = '9c758e5eabb24d4e8ec881131ae5b33a';
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=${apiKey}`;

      const request = await fetch( url );
      const resultado = await request.json();

      setNoticias( resultado.articles );
    }

    consultarAPI();
  }, [categoria])
  return (
    <>
        <Header titulo="buscador de noticias"/>

        <div className="container white">
            <Formulario 
                setCategoria={ setCategoria }
            />

            <ListadoNoticias 
                noticias={ noticias }
            />
        </div>
    </>
  );
}

export default App;
