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
    <article className="grid grid-cols-1 items-center gap-6 rounded-4xl border border-emerald-500/50 bg-stone-950/30 p-5 sm:p-6 md:grid-cols-12 md:gap-8 md:p-8">
      <div className={`min-w-0 md:col-span-6 ${isRightAligned ? 'md:order-2' : ''}`}>
        <Image
          src={project.images[0]}
          alt={project.title}
          className="h-64 w-full max-w-none sm:h-80 md:h-88 md:w-full"
        />
      </div>

      <div className={`min-w-0 flex flex-col gap-5 md:col-span-6 ${isRightAligned ? 'md:order-1' : ''}`}>
        <h3 className="text-3xl font-semibold text-white sm:text-4xl">{project.title}</h3>
        <p className="leading-8 text-white/80">{project.description}</p>
        <Button
          content="Explore >"
          className="w-fit"
          onClick={() => {
            window.location.hash = `#/projects/${project.slug}`
          }}
        />
      </div>
    </article>
  )
}

export default CaseCard
