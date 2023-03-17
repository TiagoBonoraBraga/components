import Form  from '../../Components/Form'
import Header from '../../Components/Header'
import NewComponents from '../../Components/NewComponents/NewComponents'
import React from 'react'
import Titulo from '../../Components/Titulo'

const EstudoComponents = () => {
  return (
    <main>
      <Header/>
      <NewComponents/>
      <Titulo texto='Meu titulo'/>
      <Titulo>esse é o children <p>teste</p></Titulo>
      <Form/>
    </main>
  )
}

export default EstudoComponents
