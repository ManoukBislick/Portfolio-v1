import Button from '../atoms/button'
import Image from '../atoms/image'
import type { Project } from '../../data/projects'

type ProjectDetailProps = {
  project: Project
}

function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="flex flex-col gap-12 py-12">
      <div className="flex flex-col gap-6">
        <Button
          content="< Back"
          onClick={() => {
            window.location.hash = ''
          }}
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-semibold text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-white/85">
            {project.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {project.images.map((image, index) => (
          <div key={`${project.slug}-${index}`} className="md:col-span-6">
            <Image
              src={image}
              alt={`${project.title} preview ${index + 1}`}
              className="h-[22rem] w-full"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {(project.sections ?? []).map((section) => (
          <article
            key={section.title}
            className="rounded-[2rem] border border-emerald-500/50 bg-stone-950/30 p-8 md:col-span-6"
          >
            <h2 className="mb-4 text-3xl font-semibold text-white">
              {section.title}
            </h2>
            <p className="leading-8 text-white/85">
              {section.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectDetail
