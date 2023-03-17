import Button from './Button'
import { Container } from './style'
import Input from './Input'
import React from 'react'

const Form = () => {
  return (
    <>
      <Container>
        <Input label='Nome' placeholder={'Digite seu nome aqui'} id="nome" required/>
        <Input label='Password' type="password" placeholder={'Digite sua senha aqui'} id="password"/>
        <Button texto='click aqui' />
      </Container>

    </>
  )
}

export default Form
