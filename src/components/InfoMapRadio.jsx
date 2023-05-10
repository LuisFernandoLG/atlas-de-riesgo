import React from 'react'

export const InfoMapRadio = ({label, enable, toggleState}) => {
  return <>
  <input type="checkbox" checked={enable} onChange={toggleState}/>
  <label >{label || ""} </label>

  </>
}
