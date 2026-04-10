type ButtonProps = {
  content: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

function Button({
  content,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-10 rounded-lg border border-white px-5 text-white transition-all duration-300 ease-in hover:border-emerald-500 ${className}`}
    >
      {content}
    </button>
  )
}

export default Button
