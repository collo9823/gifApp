import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');


  const onInputChange = (e)=>{
    setInputValue(e.target.value);
  }

  const onSubmit=(event)=>{
    event.preventDefault()
    // const newInputValue = inputValue.trim().toUpperCase();
    if(inputValue.trim().length<= 1)return;    
    onNewCategory(inputValue.trim().toUpperCase())
    setInputValue('')
  }


  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder="Buscar GIF's" 
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
