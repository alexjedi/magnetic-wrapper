'use client'

import {
  Component,
  Copy,
  Dribbble,
  Framer,
  Github,
  Grip,
  Linkedin,
  Star,
  TestTube,
  TestTubeDiagonal,
  Twitter,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import MagneticWrapper from '@/components/MagneticFrame'
import CustomLink from '@/components/ui/link'
import Image from 'next/image'
import profilePic from '@/app/avatar.png'

const copiedWrapper = `'use client'

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
`

const copiedOverride = `import { useState, useEffect, useRef, ComponentType } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const SPRING_CONFIG = { damping: 30, stiffness: 150, mass: 0.2 }
const MAX_DISTANCE = 0.3
const MAX_SCALE = 1.1

export const MagneticWrapper = (Component): ComponentType => {
    return (props) => {
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

            document.addEventListener("mousemove", handleMouseMove)
            return () => {
                document.removeEventListener("mousemove", handleMouseMove)
            }
        }, [isHovered, x, y, scale])

        return (
            <motion.div
                ref={ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    position: "relative",
                    x: springX,
                    y: springY,
                    scale: springScale,
                }}
            >
                <Component {...props} />
            </motion.div>
        )
    }
}
`

export default function Home() {
  const { toast } = useToast()
  return (
    <main className="flex w-screen h-screen flex-col items-start justify-center p-24">
      <div className="w-full p-12 fixed flex justify-between items-center top-0 right-0 left-0">
        <CustomLink href="https://github.com/alexjedi">
          <Image
            src={profilePic}
            className="w-6 h-6 rounded-full mr-1"
            alt="Picture of the author"
          />
          <span className="text-xl font-medium ml-2">Alex Shevliakov</span>
        </CustomLink>
        <div className="flex space-x-2 items-center">
          <CustomLink href="https://magnetic-wrapper.vercel.app/performance">
            <TestTubeDiagonal size={24} strokeWidth={2} className="text-muted-foreground" />
          </CustomLink>
          <CustomLink href="https://github.com/alexjedi/magnetic-wrapper">
            <Star size={24} strokeWidth={2} className="text-muted-foreground" />
          </CustomLink>
          <CustomLink href="https://github.com/alexjedi/magnetic-wrapper">
            <Github size={24} strokeWidth={2} className="text-muted-foreground" />
          </CustomLink>
        </div>
      </div>
      <section className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col space-y-16">
          <MagneticWrapper>
            <div className="bg-secondary p-32 rounded-full cursor-grab flex items-center justify-center">
              <Grip size={32} className="text-muted-foreground"></Grip>
            </div>
          </MagneticWrapper>
          <div className="w-full flex flex-col items-center space-y-8">
            <h1 className='className="border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0"'>
              Magnetic Wrapper{' '}
              <Component
                size={40}
                strokeWidth={2}
                className="inline-block mr-2 text-muted-foreground"
              />
              <span className="text-muted-foreground inline-block mr-2">Component</span> and
              <Framer
                size={40}
                strokeWidth={2}
                className="inline-block mx-2 text-muted-foreground"
              />
              <span className="text-muted-foreground inline-block">Override</span>
            </h1>
            <p className="text-3xl text-center text-muted-foreground font-medium">
              One click Copy and Paste magic effect
            </p>
          </div>
          <div className="w-full flex justify-center items-center space-x-4">
            <div className="flex flex-col space-y-3 items-center">
              <Button
                size={'xl'}
                variant="outline"
                onClick={() => {
                  toast({
                    title: 'Copied to clipboard!',
                    description: 'Create a new component and paste copied code there',
                  })
                  navigator.clipboard.writeText(copiedWrapper)
                }}
              >
                <Copy size={20} strokeWidth={3} className="text-muted-foreground mr-2" />
                <span>Copy wrapper</span>
              </Button>
              <p className="text-muted-foreground text-sm">for your Code project</p>
            </div>
            <div className="flex flex-col space-y-3 items-center">
              <Button
                size={'xl'}
                variant="outline"
                onClick={() => {
                  toast({
                    title: 'Copied to clipboard!',
                    description: 'Create a code override snippert and paste copied code there',
                  })
                  navigator.clipboard.writeText(copiedOverride)
                }}
              >
                <Copy size={20} strokeWidth={3} className="text-muted-foreground mr-2" />
                Copy override
              </Button>
              <p className="text-muted-foreground text-sm">for your Framer project</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full p-12 fixed flex justify-between items-center bottom-0 right-0 left-0">
        <span className="text-lg text-muted-foreground">Please, dont forget to star the repo!</span>
        <div className="flex space-x-2 items-center">
          <CustomLink href="https://twitter.com/pxl_alexjedi">
            <Twitter size={24} className="text-muted-foreground" />
          </CustomLink>
          <CustomLink href="https://www.linkedin.com/in/alex-shelvey/">
            <Linkedin size={24} strokeWidth={2} className="text-muted-foreground" />
          </CustomLink>
          <CustomLink href="https://dribbble.com/pxlhead">
            <Dribbble size={24} strokeWidth={2} className="text-muted-foreground" />
          </CustomLink>
        </div>
      </div>
    </main>
  )
}
