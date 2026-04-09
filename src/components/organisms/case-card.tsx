import Button from '../atoms/button'
import Image from '../atoms/image'
import type { Project } from '../../data/projects'

type CaseCardProps = {
  project: Project
  align?: 'left' | 'right'
}

function CaseCard({ project, align = 'left' }: CaseCardProps) {
  const isRightAligned = align === 'right'

  return (
    <article className="grid grid-cols-1 items-center gap-8 rounded-[2rem] border border-emerald-500/50 bg-stone-950/30 p-8 md:grid-cols-12">
      <div className={`md:col-span-6 ${isRightAligned ? 'md:order-2' : ''}`}>
        <Image
          src={project.images[0]}
          alt={project.title}
          className="h-[22rem] w-full"
        />
      </div>

      <div className={`flex flex-col gap-5 md:col-span-6 ${isRightAligned ? 'md:order-1' : ''}`}>
        <h3 className="text-4xl font-semibold text-white">{project.title}</h3>
        <p className="max-w-xl leading-8 text-white/80">{project.description}</p>
        <Button
          content="Explore project >"
          onClick={() => {
            window.location.hash = `#/projects/${project.slug}`
          }}
        />
      </div>
    </article>
  )
}

export default CaseCard
