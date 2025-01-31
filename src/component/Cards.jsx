import React from 'react'
import { gameUrls } from './const'

function Cards() {
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
         {gameUrls.map((image, index) => (
        <img key={index} src={image} alt={`Game ${index + 1}`} className="w-2xl  h-110 flex-wrap rounded-lg shadow-lg" />
      ))}
    </div>
  )
}

export default Cards