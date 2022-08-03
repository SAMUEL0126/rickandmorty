import React from 'react'

export const Input = ({texto , setTexto}) => {

  const Inputinformation =({target}) => {
    setTexto(target.value)
  }

  return (
    <div className='Inputcon'>
        <input  type="text" value={texto} onChange={Inputinformation} />
        <button>Buscar</button>
    </div>
  )
}
