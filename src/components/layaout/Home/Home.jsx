import React from 'react'
import { useEffect , useState } from 'react'
import { Input } from '../../UI/Input/Input'
import { Person } from '../../UI/Person/Person'
export const Home = () => {
  const [character, setCharacter] = useState ([])
  useEffect (()=>{
    const fetchdata = async () => {
        const res = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        setCharacter(data.results)

    }
    fetchdata()
  },[]) 

  const [texto, setTexto] = useState ('')
  const inpputcharacter = character.filter(data => data.name.toUpperCase().includes(texto.toUpperCase()))

  return (
    <div>
      <Input texto={texto} setTexto={setTexto} />
      <Person character={inpputcharacter}/>
    </div>

  )
}
