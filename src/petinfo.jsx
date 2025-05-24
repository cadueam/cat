import { useEffect, useState } from 'react'
import catfoto from './assets/catsquare.jpg'


const Petcarrossel = () => {

  const [gatos, setGatos] = useState([]);

  useEffect(() => {
    fetch('/gatos.json')
      .then(res => res.json())
      .then(data => setGatos(data));
  }, []);


  return (
    <div className="flex flex-col gap-4 overflow-x-auto px-4 pb-4 h-full ">
      {gatos.map((gato, i) => (
        <div
          key={i}
          className="min-w-[200px] max-w-[200px] bg-white shadow-md rounded-sm border border-gray-300 flex-shrink-0"
        >
          <img
            src={catfoto}
            alt={`Foto do gato ${gato.nome}`}
            className="w-full h-[200px] object-cover border-b border-gray-200"
          />
          <div className="p-2 text-center flex flex-col gap-1">
            <p className="font-bold">{gato.nome}</p>
            <p className="text-sm">{gato.info}</p>
            <p className="text-xs text-gray-500">Contato: {gato.contato}</p>
          </div>
        </div>
      ))}
    </div>
  );

}

export default Petcarrossel 
