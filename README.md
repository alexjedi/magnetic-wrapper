# Magnetic Wrapper

## Overview

The **Magnetic Wrapper** project provides a reusable React component and a Framer code override that adds a magnetic hover effect to your elements. This document will guide you through using the Magnetic Wrapper in your code repository and within the Framer website editor.

## Getting Started

### Prerequisites

Before you start, make sure you have the following tools installed:

- Node.js
- npm or yarn
- Framer account (for Framer usage)
- framer-motion (for code usage)

### Usage in a Code Repository

#### MagneticWrapper Component

1. Copy the `MagneticWrapper` component code:

   ```jsx
   'use client'

   import { useState, useEffect, useRef, ReactNode } from 'react'
   import { motion, useMotionValue, useSpring } from 'framer-motion'

   const SPRING_CONFIG = { damping: 30, stiffness: 150, mass: 0.2 }
   const MAX_DISTANCE = 0.3
   const MAX_SCALE = 1.1

   interface MagneticWrapperProps {
     children: ReactNode;
   }

   const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ children }) => {
     const [isHovered, setIsHovered] = useState(false)
     const x = useMotionValue(0)
     const y = useMotionValue(0)
     const scale = useMotionValue(1)
     const ref = useRef < HTMLDivElement > null
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
   ```

2. Use Magic Wapper in your app:

   ```jsx
   import React from 'react'
   import MagneticWrapper from './MagneticWrapper'

   const CustomLink = ({ href, children }) => {
     return (
       <MagneticWrapper>
         <a
           href={href}
           target="_blank"
           className="p-4 rounded-full flex items-center justify-center bg-background text-accent-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
         >
           {children}
         </a>
       </MagneticWrapper>
     )
   }

   export default CustomLink
   ```

### Usage in Framer Website Editor

1. Copy the `MagneticWrapper` code override:

   ```jsx
   import { useState, useEffect, useRef, ComponentType } from 'react'
   import { motion, useMotionValue, useSpring } from 'framer-motion'

   const SPRING_CONFIG = { damping: 30, stiffness: 150, mass: 0.2 }
   const MAX_DISTANCE = 0.3
   const MAX_SCALE = 1.1

   export const MagneticWrapper = (Component): ComponentType => {
     return (props) => {
       const [isHovered, setIsHovered] = useState(false)
       const x = useMotionValue(0)
       const y = useMotionValue(0)
       const scale = useMotionValue(1)
       const ref = useRef <HTMLDivElement>(null)
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
           <Component {...props} />
         </motion.div>
       )
     }
   }
   ```

2. In your Framer project, create a new code override snippet [right bottom part of the right sidebar -> Code Override -> New File] and paste the copied code.

3. Apply the `MagneticWrapper` override to any component or element you want to have the magnetic effect. Don't forget to choose in the panel both: File Name and Override name!

## Troubleshoting

1. Components not responding to hover:

- Ensure that the component is properly wrapped with the MagneticWrapper. If the component is not wrapped correctly, it won't respond to hover events.
- Verify that the correct file name and override name are selected in the Framer panel.

2. Component alignment issues:

- If the component appears misaligned, try wrapping it in an overflow: visible frame. This can help with alignment issues by allowing the component to expand beyond its container's bounds.
- If the frame is moved to the left, wrap the component in another frame that is aligned to the center. This ensures that both the component and its container are properly centered.

3. Problems when converting an image into a component:

- If you encounter issues when converting an image into a component, try wrapping the image component in a frame first. Then, apply the MagneticWrapper override to the frame instead of the image component directly.
- This method ensures that the image component remains stable while the magnetic effect is applied to its containing frame.

Thank you, @schemetastic, for finding the errors and ways to fix them!

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any changes.

## License

This project is licensed under the MIT License.

## Contact

Feel free to reach out on [Twitter](https://twitter.com/pxl_alexjedi), [LinkedIn](https://www.linkedin.com/in/alex-shelvey/), or [Dribbble](https://dribbble.com/pxlhead).

Don't forget to star the repo if you found it useful!

---

Happy coding!
