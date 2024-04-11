import React from 'react'
import './Button.css'

type nameProps = {
    nameProps : string;
}

const sendData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
}

const Button = ({nameProps}: nameProps) => {
  return (
    <>
        <button 
        type="submit"
        onSubmit={sendData}
        className='Button-components'
        > {nameProps}
        </button>
    </>
  )
}

export default Button