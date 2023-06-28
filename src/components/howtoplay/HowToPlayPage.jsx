import React from 'react'
import { howToPlayContent, sectionElements } from '../../constants'
import HowToPlayHero from './HowToPlayHero'
import HowToPlayDecks from './HowToPlayDecks'
import HowToPlayPlaymat from './HowToPlayPlaymat'


const HowToPlayPage = () => {


  return (
      <>
          <HowToPlayHero content={howToPlayContent[0]} elements={sectionElements} />
          <HowToPlayDecks content={howToPlayContent[1]} />
          <HowToPlayPlaymat content={howToPlayContent[2]} />
      </>
  )
}

export default HowToPlayPage