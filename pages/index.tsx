import type { NextPage } from 'next'
import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection';
import SkillSection from '../components/SkillSection';

const Home: NextPage = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <main className='select-none'>
      <HeroSection visible={visible} />
      <SkillSection setVisibleFromChild={setVisible} />
      <ProjectSection visible={visible} />
    </main>
  )
}

export default Home
