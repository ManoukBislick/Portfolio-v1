type TagBlockProps = {
  content: string
}

function TagBlock({ content }: TagBlockProps) {
  return (
    <div className="inline-flex w-fit rounded-lg bg-emerald-500 px-4 py-2 text-base font-medium text-stone-950">
      {content}
    </div>
  )
}

export default TagBlock
