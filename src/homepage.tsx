import './App.css'

import { useEffect, useState } from 'react'

import CustomCursor from './components/atoms/custom-cursor'
import Navigation from './components/organisms/navigation'
import Image from './components/atoms/image'
import CaseCard from './components/organisms/case-card'
import ProjectDetail from './components/organisms/project-detail'
import { projects } from './data/projects'
import InputField from './components/atoms/input-field'
import Icon from './components/atoms/icon'

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
      <main className="grid h-screen grid-cols-1 overflow-y-auto snap-y snap-mandatory md:grid-cols-12">
        <div className="flex flex-col md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
          <Navigation />

          {selectedProject ? (
            <ProjectDetail project={selectedProject} />
          ) : (
            <>
              {/* Hero */}
              <section
                id="home"
                aria-label="Home"
                className="flex min-h-screen snap-start scroll-mt-24 flex-col items-center gap-10 px-4 py-24 sm:px-6 md:flex-row md:gap-8 md:px-0 xl:gap-10"
              >
                <div className="flex max-w-xl flex-col gap-4 xl:max-w-2xl">
                  <h1 className='text-white font-bold text-4xl/14 sm:text-5xl/16 md:text-6xl/20'>
                    Hi, I'm <span className='text-emerald-500'>Manouk!</span> 
                    <br/> 
                    I’m a dutch <span className='text-emerald-500'>front-end developer.</span>
                  </h1>
                  <p className='max-w-xl text-white'>
                    Playful ideas brought to life with powerful execution.
                    <br/>
                    <span className='text-emerald-500'>Fun fact: My favourite colour is green ;)</span>
                  </p>
                </div>
                <Image
                  src={ManoukBislick}
                  alt="Manouk portrait"
                  className="mx-auto md:ml-auto md:mr-0 md:max-w-[24rem] xl:max-w-[29rem]"
                />
              </section>

              {/* About */}
              <section
                id="about"
                aria-label="About"
                className="flex min-h-screen snap-start scroll-mt-24 flex-col items-center gap-10 px-4 py-24 sm:px-6 md:flex-row md:gap-8 md:px-0 xl:gap-10"
              >
                <Image 
                  src={KantoorManouk} 
                  alt='Me in the office'
                  className="mx-auto md:mr-auto md:ml-0 md:max-w-[24rem] xl:max-w-[29rem]"
                />
                <div className="flex max-w-xl flex-col gap-4 xl:max-w-2xl">
                  <h2 className='text-white font-semibold text-4xl sm:text-5xl md:text-5xl'>
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
              <section
                id="projects"
                aria-label="Projects"
                className='flex min-h-screen snap-start scroll-mt-24 items-center justify-center px-4 py-24 sm:px-6 md:px-0'
              >
                <div className='flex w-full flex-col gap-10'>
                  <h2 className='text-white font-semibold text-4xl text-center sm:text-5xl md:text-5xl'>
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
              {/* Contact */}
              <section
                id="contact"
                aria-label="contact"
                className='flex min-h-screen snap-start scroll-mt-24 items-center justify-center px-4 py-24 sm:px-6 md:px-0'
              >
                <div className='flex w-full flex-col gap-8'>
                  <h2 className='text-white font-semibold text-4xl text-center sm:text-5xl md:text-5xl'>
                    Getting all <span className='text-emerald-500'>excited</span>?
                  </h2>
                  <section className='flex w-full flex-col items-start justify-between gap-10 md:flex-row'>
                    <div className='flex flex-col gap-4'>
                      <h3 className='text-white text-2xl sm:text-3xl md:text-3xl'>Leave your personal message here!</h3>
                      <InputField />
                    </div>
                    <div className='flex flex-col gap-4 self-start'>
                      <h3 className='text-white text-2xl sm:text-3xl md:text-3xl'>Give it a Follow!</h3>
                      <div className='flex flex-row gap-5'>
                        <Icon icon='linkedin' href={'https://www.linkedin.com/in/manouk-bislick-42241420a/'} />
                        <Icon icon='github' href={'https://github.com/ManoukBislick'} />
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default Homepage
