'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const SPRING_CONFIG = { damping: 30, stiffness: 150, mass: 0.2 }
const MAX_DISTANCE = 0.3
const MAX_SCALE = 1.1

interface MagneticWrapperProps {
  children: ReactNode
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)
  const ref = useRef<HTMLDivElement>(null)
  const springX = useSpring(x, SPRING_CONFIG)
  const springY = useSpring(y, SPRING_CONFIG)
  const springScale = useSpring(scale, { damping: 20, stiffness: 300 })

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distanceX = (e.clientX - centerX) * MAX_DISTANCE
        const distanceY = (e.clientY - centerY) * MAX_DISTANCE

        if (isHovered) {
          x.set(distanceX)
          y.set(distanceY)
          scale.set(MAX_SCALE)
        } else {
          x.set(0)
          y.set(0)
          scale.set(1)
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => calculateDistance(e))
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered, x, y, scale])

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        x: springX,
        y: springY,
        scale: springScale,
      }}
    >
      {children}
    </motion.div>
  )
}

export default MagneticWrapper
