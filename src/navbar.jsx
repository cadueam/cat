import logo from './assets/nekologo.png'

const Navbar = () => {
  return (
    <div className='h-auto flex w-screen items-center justify-between pr-4 pl-4 bg-black/30 backdrop-blur-md fixed text-white z-[999]'>

      <img src={logo} alt="nekologo" className='h-[50px]' />
      <ul className='flex w-fit h-auto gap-5'>
        <li>Adote</li>
        <li>Doe</li>
        <li>Quem Somos</li>
      </ul>
    </div>
  )
}

export default Navbar
