'use client'

import { Component, Copy, Framer, Grip } from 'lucide-react'
import GitHubButton from 'react-github-btn'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import MagneticWrapper from '@/components/MagneticFrame'

export default function Home() {
  const { toast } = useToast()
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center p-24">
      <div></div>
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
            <Framer size={40} strokeWidth={2} className="inline-block mx-2 text-muted-foreground" />
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
                navigator.clipboard.writeText('Copy this text to clipboard')
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
                navigator.clipboard.writeText('Copy this text to clipboard')
              }}
            >
              <Copy size={20} strokeWidth={3} className="text-muted-foreground mr-2" />
              Copy override
            </Button>
            <p className="text-muted-foreground text-sm">for your Framer project</p>
          </div>
        </div>
      </div>
    </main>
  )
}
