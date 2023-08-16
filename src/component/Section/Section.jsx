import React from 'react'

import Phrase from '../Phrase/Phrase'
import './Section.css'

export default function Section({ phrases }) {

  return (
    <div className='section'>
      {phrases[0].map((phrase) => <Phrase>{phrase}</Phrase>)}

    </div>
  )
}
