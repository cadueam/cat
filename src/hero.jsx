import cat from './assets/Cat.mp4'

const HeroSection = () => {
  return (
    <section className="h-fit w-fit overflow-hidden flex items-center justify-center">
      <div className='z-[1] absolute text-white'>
        <p className='text-8xl text-white '>ADOTA GATOS</p>
        <p className='text-3xl text-white text-center italic '>Aqui vai um textinho bem legal < br /> somo como <span className='font-bold'>adotar é importante</span></p>
        <div className='flex justify-around m-3'>
          <button className='bg-[#323232] py-2 px-4 font-bold text-xl'>Adote</button>
          <button className='bg-[#323232] py-2 px-4 font-bold text-xl'>Doe</button>
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
  )

}


export default HeroSection
