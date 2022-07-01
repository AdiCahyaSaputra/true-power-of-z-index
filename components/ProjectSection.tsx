import { useState } from "react";

type ProjectSectionProps = {
    visible: boolean
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ visible }) => {
    const [active, setActive] = useState('react');

    return (
      <aside className={`${visible && 'translate-y-full'} transition-all md:w-7/12 z-30 px-4 w-full md:h-5/6 h-4/6 fixed md:right-0 bottom-0`}>
        <header className='py-2 space-y-3 md:space-y-0 flex md:justify-between md:flex-row flex-col items-center md:items-start'>
          <h1 className="md:text-4xl relative bg-gray-200 md:bg-transparent text-2xl font-bold">PROJECT <span className={`font-normal inline-block transition-all duration-300 delay-150 ${visible && 'translate-y-full'}`}>GABUT</span>
          </h1>
          <div className='space-y-2 hidden md:block'>
            <div className={`w-16 h-2 bg-black transition-all delay-200 duration-300 ${visible && 'translate-x-full'}`}></div>
            <div className={`w-12 h-2 bg-black transition-all delay-300 duration-300 ${visible && 'translate-x-full'}`}></div>
          </div>
        </header>

        <nav className="p-2 flex space-x-4 mt-4 justify-center md:justify-start">
            <div onClick={() => setActive('react')} className={`${active === 'react' ? 'text-black' : 'before:-translate-x-full text-gray-500'} cursor-pointer font-medium before:inset-x-0 relative before:content-[''] before:absolute transition-all duration-300 overflow-hidden before:h-1.5 before:bottom-0 py-2 before:bg-black`}>ReactJS</div>
            <div onClick={() => setActive('laravel')} className={`${active === 'laravel' ? 'text-black' : 'before:-translate-x-full text-gray-500'} cursor-pointer font-medium before:inset-x-0 relative before:content-[''] before:absolute transition-all duration-300 overflow-hidden before:h-1.5 before:bottom-0 py-2 before:bg-black`}>Laravel</div>
            <div onClick={() => setActive('nodejs')} className={`${active === 'nodejs' ? 'text-black' : 'before:-translate-x-full text-gray-500'} cursor-pointer font-medium before:inset-x-0 relative before:content-[''] before:absolute transition-all duration-300 overflow-hidden before:h-1.5 before:bottom-0 py-2 before:bg-black`}>NodeJS</div>
        </nav>

        <div className="no-scrollbar max-w-full snap-x p-2 md:p-4 overflow-x-auto flex space-x-4">
            <article className="snap-center w-10/12 md:w-7/12 shrink-0 aspect-video bg-gray-300"></article>
            <article className="snap-center w-10/12 md:w-7/12 shrink-0 aspect-video bg-gray-300"></article>
            <article className="snap-center w-10/12 md:w-7/12 shrink-0 aspect-video bg-gray-300"></article>
        </div>
      </aside>
    )
}

export default ProjectSection;