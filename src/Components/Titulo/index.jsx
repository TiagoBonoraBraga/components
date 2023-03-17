import React from 'react'
import {TituloBox} from '../Titulo/style'

const Titulo = ({texto, children}) => {
  return (
   <TituloBox>{texto} {children}</TituloBox>
  )
}

export default Titulo
