import './App.css'

import { useEffect, useState } from 'react'

import CustomCursor from './components/atoms/custom-cursor'
import Navigation from './components/organisms/navigation'
import Image from './components/atoms/image'
import CaseCard from './components/organisms/case-card'
import ProjectDetail from './components/organisms/project-detail'
import { projects } from './data/projects'

import ManoukBislick from './assets/images/Ik.jpg'
import KantoorManouk from './assets/images/Kantoor_Manouk copy.jpeg'

function Homepage() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const projectSlug = hash.startsWith('#/projects/')
    ? hash.replace('#/projects/', '')
    : null

  const selectedProject = projectSlug
    ? projects.find((project) => project.slug === projectSlug) ?? null
    : null

  return (
    <>
      <CustomCursor />
      <section className="grid min-h-screen grid-cols-1 py-10 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-start-4 md:col-span-6">
          <Navigation />

          {selectedProject ? (
            <ProjectDetail project={selectedProject} />
          ) : (
            <>
              {/* Hero */}
              <section className="flex min-h-[70vh] items-center">
                <div className="flex max-w-2xl flex-col gap-4">
                  <h1 className='text-white font-bold text-6xl/20'>
                    Hi, I'm <span className='text-emerald-500'>Manouk!</span> 
                    <br/> 
                    I’m a dutch <span className='text-emerald-500'>front-end developer.</span>
                  </h1>
                  <p className='text-white'>
                    Playful ideas brought to life with powerful execution.
                    <br/>
                    <span className='text-emerald-500'>Fun fact: My favourite colour is green ;)</span>
                  </p>
                </div>
                <Image
                  src={ManoukBislick}
                  alt="Manouk portrait"
                  className="ml-auto h-[22rem] w-[29rem]"
                />
              </section>

              {/* About */}
              <section className="flex min-h-[70vh] items-center gap-10">
                <Image 
                  src={KantoorManouk} 
                  alt='Me in the office'
                  className="mr-auto h-[22rem] w-[29rem]"
                />
                <div className="flex max-w-2xl flex-col gap-4">
                  <h2 className='text-white font-semibold text-5xl'>
                    A little bit <span className='text-emerald-500'>about</span> me
                  </h2>
                  <p className='text-white'>
                    Hey, my name is Manouk Bislick. I am a 20 year old software development student based in Rotterdam, The Netherlands.
                    <br/><br/>
                    I specialize in front-end development, where I focus on building clean, responsive, and user-friendly interfaces. I enjoy bringing designs to life and creating experiences that feel both intuitive and visually engaging.
                    <br/><br/>
                    I have hands-on experience with technologies such as React and modern CMS platforms, and I am comfortable working in Agile and Scrum-based environments. Collaboration and feedback play an important role in how I work, and I am always looking for ways to improve and grow as a developer.
                    <br/><br/>
                    I’m currently looking for opportunities where I can contribute to meaningful projects, continue learning, and develop my skills within a professional team.
                  </p>
                </div>
              </section>

              {/* Projects */}
              <section id="projects" className='flex min-h-[70vh] items-center justify-center py-12'>
                <div className='flex w-full flex-col gap-10'>
                  <h2 className='text-white font-semibold text-5xl text-center'>
                    Some of my <span className='text-emerald-500'>featured projects</span>
                  </h2>
                  <div className='flex flex-col gap-8'>
                    {projects.map((project, index) => (
                      <CaseCard
                        key={project.slug}
                        project={project}
                        align={index % 2 === 0 ? 'left' : 'right'}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Homepage
