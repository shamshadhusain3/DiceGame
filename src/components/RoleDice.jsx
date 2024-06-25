import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function RoleDice({ currentDice, setcurrentDice, roleDice }) {
    const [isRolling, setIsRolling] = useState(false);

    const handleRollDice = () => {
        setIsRolling(true);
        setTimeout(() => {
            roleDice();
            setIsRolling(false);
        }, 1000); // Duration of the animation
    };

    return (
        <DiceContainer>
            <Dice
                onClick={handleRollDice}
                className={isRolling ? 'rolling' : ''}
            >
                <img src={`../../public/images/roleDice/dice_${currentDice}.png`} alt="Dice" />
            </Dice>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
}

export default RoleDice;

const rotate = keyframes`
    /* 0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); } */
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg)  rotateX(1800deg); }
`;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 24px;
    }
`;

const Dice = styled.div`
    cursor: pointer;

    &.rolling {
        animation: ${rotate} 1s linear;
    }

    /* img {
        width: 250px;
        height: 250px;
    } */
`;
