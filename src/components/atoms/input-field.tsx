import { useState } from 'react'
import type { FormEvent } from 'react'

import Button from './button'

const fieldClassName =
  'w-full rounded-lg border border-emerald-500 bg-transparent px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white'

function InputField() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('sending')

    try {
      const response = await fetch('https://formsubmit.co/ajax/bislickmanouk@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to send form')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-80 flex-col gap-8">
      <input type="hidden" name="_subject" value="New message from portfolio contact form" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="flex flex-col gap-2">
        <p className="text-white">Name:</p>
        <input
          type="text"
          name="name"
          placeholder="Manouk Bislick"
          className={fieldClassName}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white">Email:</p>
        <input
          type="email"
          name="email"
          placeholder="bislickmanouk@gmail.com"
          className={fieldClassName}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white">Message:</p>
        <textarea
          name="message"
          placeholder="Dear Manouk,..."
          rows={5}
          className={fieldClassName}
          required
        />
      </div>
      <Button
        content={status === 'sending' ? 'Sending...' : 'Send message'}
        type="submit"
        className="w-fit"
      />
      {status === 'success' ? (
        <p className="text-sm text-emerald-500">Thanks! Your message has been sent.</p>
      ) : null}
      {status === 'error' ? (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  )
}

export default InputField
