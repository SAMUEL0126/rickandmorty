import React from 'react'
export const Card = ({character}) => {
  return (
   <div className='Card'>
    <div>
        <img src={character.image} alt="" />

    </div>
    <div className='Information'>
        <p> {character.name} </p>
        <p>{character.id} </p>
        <p>{character.species} </p>
    </div>
   </div>
  )
}
