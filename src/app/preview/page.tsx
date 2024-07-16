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

export default function Home() {
  const { toast } = useToast()
  return (
    <main className="flex w-screen h-screen flex-col items-start justify-center p-24">
      <section className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col space-y-16">
          <MagneticWrapper>
            <div className="bg-secondary p-32 rounded-full cursor-grab flex items-center justify-center">
              <Grip size={32} className="text-muted-foreground"></Grip>
            </div>
          </MagneticWrapper>
        </div>
      </section>
    </main>
  )
}
