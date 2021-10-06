import React, {useState} from 'react';

function App() {
  const [texto, setTexto] = useState('');

  return (
    <div className="App">
      <div className="flex justify-center">
        <div className="w-72 h-98 border border-black mt-4 shadow-2xl block">
          <div className="w-64 h-48 bg-gray-500 text-center m-4"/>
          <p className="text-center font-bold mb-3">Iphone 12 Pro MAX</p>
          <p className="text-center mx-3">128 gb memoria</p>
          <p className="text-center mx-3">64 mp Camara Trasera</p>
          <p className="text-center mx-3">12 mp Camara Frontal</p>
          <p className="text-center mx-3">6.7' de Pantalla</p>
          <p className="text-center my-3 bg-yellow-500 border-2 border-gray-500 ">U$D 1.000</p>
          <button className="mx-3 my-4 bg-blue-500 font-bold text-color-white px-10 py-1 rounded-full" onClick={()=>setTexto('Gracias por su compra')}>Comprar</button>
        </div>
      </div>
      <p className="block font-bold text-blue-700 mt-4">{texto}</p>
    </div>
  );
}

export default App;
