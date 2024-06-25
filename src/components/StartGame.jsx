import styled from 'styled-components';

import React from 'react'
import { Button } from '../styled/Button';

function StartGame({toggle}) {
  return (
    <Container>
        <img src="/images/dices 1.png" alt="" />
        <div className='content'>
            <h1>Dice Game</h1>
            <Button  
            onClick={toggle}
            >Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;
const Container=styled.div`
    max-width: 1180px;
    display: flex; 
    margin: 0 auto;
    /* height: 100vh; */
    align-items: center;
    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`

