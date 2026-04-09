type ButtonProps = {
  content: string
  onClick?: () => void
}

function Button({ content, onClick }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="pl-5 pr-5 w-36 h-8 border border-white rounded-lg text-white transition-all duration-300 ease-in hover:border-emerald-500"
      >
        {content}
      </button>
    </>
  )
}

export default Button
