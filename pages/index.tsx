import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react';
import Container from '../components/Container'

const Home: NextPage = () => {
  const [visible, setVisible] = useState(true);
  const target = useRef<HTMLElement | null>(null);

  const options = { threshold: 0.6 }
  const callback: IntersectionObserverCallback = entries => {
    const [ target ] = entries;
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
    <>
      <section className="w-full h-screen relative z-20 bg-black">
        <div className={`${!visible && 'hidden'} fixed left-[50%] -translate-x-[50%] flex h-full flex-col justify-center items-center text-white`}>
          <h1 className="text-xl font-bold">Adi Cahya Saputra</h1>
          <p>Software Engineer</p>
        </div>
      </section>
      <section ref={ target } className="w-full h-screen bg-white relative">
        <div className="fixed flex justify-center items-center inset-0 bg-white">
          <h1>MERN</h1>
          <h2>STACK</h2>
        </div>
      </section>
    </>
  )
}

export default Home
