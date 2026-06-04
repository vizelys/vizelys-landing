'use client'

import { useRef, useEffect } from 'react'

export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', style, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: force-commit after 1100ms in case CSS transitions freeze
    const timeout = setTimeout(() => {
      if (el) {
        el.style.opacity = '1'
        el.style.transform = 'none'
        el.style.transition = 'none'
      }
    }, 1100 + delay)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in')
            observer.unobserve(el)
            clearTimeout(timeout)
          }
        })
      },
      { threshold: 0.08 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [delay])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
