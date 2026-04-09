import { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current

    if (!cursor) {
      return
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY
    let currentScale = 1
    let targetScale = 1
    let frameId = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY

       const target = event.target as Element | null
       targetScale = target?.closest('a, button') ? 1.6 : 1
    }

    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.16
      currentY += (mouseY - currentY) * 0.16
      currentScale += (targetScale - currentScale) * 0.18

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`
      frameId = window.requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', handleMouseMove)
    frameId = window.requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}

export default CustomCursor
