import Image from '../atoms/image'
import TagBlock from '../atoms/tag-block'
import type { Project } from '../../data/projects'
import Link from '../atoms/link'

type ProjectDetailProps = {
  project: Project
}

function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="flex flex-col gap-16 px-4 py-10 sm:px-6 md:gap-30 md:px-0 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-white">
            {project.description}
          </p>
        </div>
        {project.link ? (
          <Link
            href={project.link}
            content={project.linkTitle ?? 'Visit project'}
            className="text-lg"
          />
        ) : null}
        <div className='flex flex-row gap-5'>
          <p className='text-white'>Made by:</p>
          {project.madeBy ? (
            <Link
              href={project.madeByLink}
              content={project.madeBy ?? 'Visit project'}
              className="text-lg"
              color='white'
            />
          ) : null}
        </div>
        
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {project.images.map((image, index) => (
          <div key={`${project.slug}-${index}`} className="md:col-span-6"> 
            <Image
              src={image}
              alt={`${project.title} preview ${index + 1}`}
              className=""
              imgClassName="transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>

      <section className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          {project.languages?.length ? (
            <section className="flex flex-col gap-4">
              <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
                Tech stack
              </h2>
              <div className="flex w-full flex-wrap items-start gap-3">
                {project.languages.map((language) => (
                  <TagBlock key={language} content={language} />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <div className="flex flex-col gap-8 md:col-span-8">
          {(project.sections ?? []).map((section) => (
            <article key={section.title}>
              <h2 className="mb-4 text-2xl font-semibold text-emerald-500 sm:text-3xl">
                {section.title}
              </h2>
              <p className="leading-8 text-white/85">
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ProjectDetail