import styled from 'styled-components';

import React, { useState } from 'react'

function NumberSelector({SelectedNumber,seterror , error,setSelectedNumber}) {
  const arrNum=[1,2,3,4,5,6];


  const handleNumber=(value)=>{
    setSelectedNumber(value)
    seterror('')
  }

  return (
        
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
  <div className='flex'>
       {arrNum.map((value,i)=>(
        <Box 
        isSelected={value===SelectedNumber}
        onClick={()=>handleNumber(value)}
        key={i}>{value}</Box>
       ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  
  )
}

export default NumberSelector
const Box=styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${({isSelected})=>(isSelected?"black":"white")};
   color: ${({isSelected})=>(!isSelected?"black":"white")};


`
const NumberSelectorContainer =styled.div`
display: flex;
flex-direction: column;
align-items: end;
gap: 5px;

.error{
    color: red;
}
   .flex{
    display: flex;
    gap:24px;
   } 
   p{
    font-size: 24px;
    font-weight: 700;
   }
`