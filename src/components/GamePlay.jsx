import styled from 'styled-components';
import React, { useState } from 'react'
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { Button, WhiteButton } from '../styled/Button';

function GamePlay() {
  const [SelectedNumber,setSelectedNumber]=useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [score, setscore] = useState(0);
  const [error, seterror] = useState('');
const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
    
    
    ;
  }
  const roleDice=()=>{
    const randomNumber =generateRandomNumber(1,6);
    // console.log(randomNumber)
    if (!SelectedNumber) {
      seterror('You have not selected any number ')
      return
    }else{
      seterror('')
    }
    setcurrentDice(randomNumber)
  if (SelectedNumber===randomNumber) {
    setscore((prev)=>prev+randomNumber)
  }else{
    setscore((prev)=>prev-2)
    
  }
  setSelectedNumber(undefined)
}

  return (
    <MainContainer>
<div className="top-section">
<ScoreContainer>
  <h1>{score}</h1>
  <p>Total Score</p>
</ScoreContainer>
<NumberSelector 
SelectedNumber={SelectedNumber}
setSelectedNumber={setSelectedNumber}
error={error}
seterror={seterror}
></NumberSelector>
</div>
<RoleDice 
currentDice={currentDice}
setcurrentDice={setcurrentDice}
roleDice={roleDice}
/>
<div className="btns">
<WhiteButton 
onClick={()=>setscore(0)}
>Reset</WhiteButton>
<Button 
onClick={()=>setshowRules((prev)=>!prev)}
>{showRules?'Hide':'Show'} Rules</Button>
</div>
{showRules && <RulesContainer>
  <h2>How to play Dice Game</h2>
  <p>Select any number</p>
  <p>Click on dice image</p>
  <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
  <p>if you get wrong guess then  2 point will be dedcuted </p>
</RulesContainer>}
    </MainContainer>
  )
}
const ScoreContainer=styled.div`
text-align: center;
max-width: 200px;
  h1{
    font-size: 100px;
    line-height: 100px;

  }
  p{
    font-size: 24px;
    font-weight: 500;
  }
`

export default GamePlay

const MainContainer=styled.div`
  
padding-top: 70px;
.top-section{
 justify-content: space-around;
  display: flex;
  align-items: center;
}
.btns{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
 margin-top: 40px;
}
`
const RulesContainer=styled.div`
/* margin-top:40px; */
padding: 20px;
margin: 40px auto;
max-width: 800px;
background-color: #f4d1d1;
 border-radius: 10px;
`