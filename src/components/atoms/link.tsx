type LinkProps = {
  content: string
  href: string
  color?: 'white' | 'green'
  underline?: boolean
  className?: string
}

function Link({ content, href, color = 'green', underline = true, className = '' }: LinkProps) {
  const colorStyle =
    color === 'green'
      ? 'text-emerald-500 hover:text-white'
      : 'text-white hover:text-white'

  const decorationStyle =
    color === 'green'
      ? 'underline decoration-emerald-500'
      : 'underline decoration-white hover:decoration-emerald-500'

  return (
    <>
      <a
        href={href}
        style={{ fontFamily: 'var(--font-poppins)' }}
        className={`${colorStyle} ${underline ? decorationStyle : 'no-underline'} pointer-events-auto transition-colors duration-300 ease-in ${className}`}
      >
        {content}
      </a>
    </>
  )
}

export default Link
