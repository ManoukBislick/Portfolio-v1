const fieldClassName =
  'w-full rounded-lg border border-emerald-500 bg-transparent px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white'

function InputField() {
  return (
    <div className="flex max-w-80 flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-white">Name:</p>
        <input
          type="text"
          name="name"
          placeholder="Manouk Bislick"
          className={fieldClassName}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white">Email:</p>
        <input
          type="email"
          name="email"
          placeholder="bislickmanouk@gmail.com"
          className={fieldClassName}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white">Message:</p>
        <textarea
          name="message"
          placeholder="Dear Manouk,..."
          rows={5}
          className={fieldClassName}
        />
      </div>
    </div>
  )
}

export default InputField
