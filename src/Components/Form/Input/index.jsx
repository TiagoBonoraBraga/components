import {InputFormBox, LabelForm} from './style'

import React from 'react'

const Input = ({label, id, placeholder, ...props}) => {
  console.log('teste', props)
  return (
    <>
    <LabelForm htmlFor={id}>{label}</LabelForm>
    <InputFormBox id={id} type="text" placeholder={placeholder} {...props}></InputFormBox>
    
    </>
  )
}

export default Input
