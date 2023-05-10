import React, { useEffect, useState } from 'react'

export const WithClient = ({children}) => {

  const [isReady, setIsReady] = useState(false)

  useEffect(()=>{
    setIsReady(true)
  },[])
  
  return (
    <>Cargando... {children}</>
  )
}
