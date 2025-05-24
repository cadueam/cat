import catfoto from './assets/catsquare.jpg'


const Petcarrossel = () => {
  //depois passar um map para cada gato do json ? 
  //implementar backend p/ facilitar ao adicionar os gatos
  //tem que ser algo fácil para o usuário cadastrar.
  // usar embla (?) lmao  / Expressjs


  return (
    <div className="w-80 h-auto bg-[#f2f2f2] flex flex-col px-4 py-2 m-4 gap-2">
      <p>NomeGato</p>
      <img src={catfoto} className='' />
      <p>Info do Gatito</p>
      <p>Contato</p>
    </div>

  )

}

export default Petcarrossel 
