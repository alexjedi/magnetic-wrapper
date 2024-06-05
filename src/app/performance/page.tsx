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
  Twitter,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import MagneticWrapper from '@/components/MagneticFrame'
import CustomLink from '@/components/ui/link'
import Image from 'next/image'
import profilePic from '@/app/avatar.png'
import StatsCounter from '@/components/Stats'

export default function Performance() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center p-24">
      <StatsCounter />
      <section className="grid grid-cols-10 gap-4">
        {Array(100)
          .fill(null)
          .map((_, index) => (
            <MagneticWrapper key={index}>
              <div className="bg-secondary w-24 h-24 rounded-full cursor-grab flex items-center justify-center">
                <Grip size={24} className="text-muted-foreground"></Grip>
              </div>
            </MagneticWrapper>
          ))}
      </section>
    </main>
  )
}
