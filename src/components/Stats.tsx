import React, { useEffect } from 'react'
import Stats from 'stats.js'

const StatsCounter = () => {
  useEffect(() => {
    const stats = new Stats()
    stats.showPanel(0)
    document.body.appendChild(stats.dom)

    const animate = () => {
      stats.begin()
      stats.end()
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    return () => {
      document.body.removeChild(stats.dom)
    }
  }, [])

  return null
}

export default StatsCounter
