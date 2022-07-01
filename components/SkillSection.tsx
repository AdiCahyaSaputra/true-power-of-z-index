import { useEffect, useRef } from 'react'

type SkillSectionProps = {
    setVisibleFromChild: Function
}

const SkillSection: React.FC<SkillSectionProps> = ({ setVisibleFromChild }) => {
  const target = useRef<null | HTMLElement>(null);
  const options = { threshold: 0.9 }

  const callback: IntersectionObserverCallback = entries => {
    const [target] = entries;
    target.isIntersecting ? setVisibleFromChild(false) : setVisibleFromChild(true);
  }

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(callback, options);
    if(target.current) observer.observe(target.current);

    return () => {
      if(target.current) observer.unobserve(target.current);
    }
  }, [target, options]);

    return (
        <section ref={target} className="w-full min-h-screen z-10 bg-white relative">
            <div className='fixed inset-0'>
            <div className='mt-6 md:mt-0 flex flex-col md:space-y-2 md:justify-center items-center md:w-6/12 md:h-full'>
                <h1 className={`md:text-5xl text-3xl font-bold`}>MERN</h1>
                <h2 className={`md:text-4xl text-2xl`}>STACK</h2>
            </div>
            </div>
        </section>
    )
}

export default SkillSection;