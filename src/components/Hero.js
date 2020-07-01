import React from 'react'

const Hero = ({ bg, children }) => {
  return (
    <header className={`hero hero--${bg}`}>
      {children}
    </header>
  )
}

export default Hero
