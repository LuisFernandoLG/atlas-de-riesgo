import React, { useState } from 'react'

const initialValue = false

export const useInfoMapRadio = ({initState}) => {

  const [enable, setEnable] = useState(initState || initialValue)
 
  const toggleState = ()=>{
    setEnable((state)=>!state)
  }

  return {enable, toggleState}
}
