const HeroVideo = () => {
    return ( 
        <section className=" relative">
          <video autoPlay muted loop className=' w-full h-screen object-cover' src="/hero-video.mp4"></video>
          <div className=" absolute top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center">
            <article className=" group text-7xl uppercase font-extrabold bg-black/60 px-10 flex items-center relative overflow-hidden">
              <h1 className="h-full py-5 ease-in-out duration-300 group-hover:-translate-y-full">Documentary</h1>
              <p className="h-full py-5 absolute ease-in-out duration-300 translate-y-full group-hover:-translate-y-0">Documentary</p>
            </article>
          </div>
        </section>
     );
}
 
export default HeroVideo;