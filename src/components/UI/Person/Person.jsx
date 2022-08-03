import React from 'react'
import { Card } from '../Card/Card'
export const Person = ({character}) => {
  return (
    <div className='Padre'>
        {character.map(data=>
        <Card key={data.id} 
        character = {data} />)}
    </div>
  )
}
