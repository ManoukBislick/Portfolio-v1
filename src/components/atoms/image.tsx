import type { FC } from 'react'

type ImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

const Image: FC<ImageProps> = ({ src, alt, className = '', imgClassName = '' }) => {
  return (
    <div
      className={`group relative h-[22rem] w-[29rem] overflow-hidden rounded-lg border border-emerald-500 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`block h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}

export default Image
