import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

const Home: NextPage = () => {

  const target = useRef<null | HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  const options = { threshold: 0.9 }
  const callback: IntersectionObserverCallback = entries => {
    const [target] = entries;
    target.isIntersecting ? setVisible(false) : setVisible(true);
  }

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(callback, options);
    if(target.current) observer.observe(target.current);

    return () => {
      if(target.current) observer.unobserve(target.current);
    }
  }, [target, options]);

  return (
    <main className='selection:bg-black selection:text-white'>
      <section className="w-full h-screen relative z-20 bg-black">
        <div className={`${!visible && 'hidden'} fixed left-[50%] -translate-x-[50%] flex h-full flex-col justify-center items-center text-white`}>
          <h1 className="md:text-xl text-lg font-bold">Adi Cahya Saputra</h1>
          <p className='sm:text-sm'>Software Engineer</p>
        </div>
      </section>
      <section ref={target} className="w-full min-h-screen z-10 bg-white relative">
        <div className='fixed inset-0'>
          <div className='mt-6 md:mt-0 flex flex-col md:space-y-2 md:justify-center items-center md:w-6/12 md:h-full'>
            <h1 className={`md:text-5xl text-3xl font-bold`}>MERN</h1>
            <h2 className={`md:text-4xl text-2xl`}>STACK</h2>
          </div>
        </div>
      </section>
      <aside className={`${visible && 'translate-y-full'} transition-all md:w-6/12 z-30 w-full md:h-5/6 h-4/6 fixed md:left-[50%] bottom-0`}>
        <header className='py-2 px-4 space-y-3 md:space-y-0 flex md:justify-between md:flex-row flex-col items-center md:items-start'>
          <h1 className="md:text-4xl relative bg-gray-200 md:bg-transparent text-2xl font-bold">PROJECT <span className={`font-normal inline-block transition-all duration-300 delay-150 ${visible && 'translate-y-full'}`}>GABUT</span>
          </h1>
          <div className='space-y-2 hidden md:block'>
            <div className={`w-16 h-1 bg-black transition-all delay-200 duration-300 ${visible && 'translate-x-full'}`}></div>
            <div className={`w-12 h-1 bg-black transition-all delay-300 duration-300 ${visible && 'translate-x-full'}`}></div>
          </div>
        </header>
      </aside>
    </main>
  )
}

export default Home
