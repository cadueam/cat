import cat from './assets/Cat.mp4'
import Navbar from './navbar'

const HeroSection = () => {
  return (
    <div>
      <Navbar />
      <section className="h-fit w-fit flex items-center justify-center relative pt-15">
        <div className='z-[1] absolute text-white'>
          <p className='text-3xl text-white text-center font-bold '>ADOTA GATOS</p>
          <p className='text-base text-white text-center italic '>Aqui vai um textinho bem legal < br /> somo como <span className='font-bold'>adotar é importante</span></p>
          <div className='flex justify-around m-3'>
            <button className='bg-[#323232] py-2 px-4 font-bold text-base'>Adote</button>
            <button className='bg-[#323232] py-2 px-4 font-bold text-base'>Doe</button>
          </div>
        </div>
        <div className='bg-black/50 w-fit h-fit relative'>
          <video
            className="object-fit z-[-1] relative"
            muted
            loop
            autoPlay
            playsInline
            src={cat}
            type="video/mp4"
          />

        </div>
      </section>

    </div>
  )

}


export default HeroSection
