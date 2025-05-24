import logo from './assets/nekologo.png'

const Navbar = () => {
  return (
    <div className='h-15 flex w-screen items-center justify-evenly bg-black/30 backdrop-blur-md text-white z-[999] px-4 fixed mb-2'>
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
