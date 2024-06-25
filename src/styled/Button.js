import styled from 'styled-components';

export const Button=styled.button`

padding: 10px 18px;
min-width: 220px;
background-color: black;
border:none;
color: white;
border-radius:5px; 
border:1px solid transparent;
transition: 0.4s background-color ease-in;
cursor: pointer ;

&:hover{
    background-color: white;
    border:1px solid black;
    color: black;
    transition: 0.3s background-color ease-in;

}
`

export const WhiteButton=styled(Button)`

background-color: white;
color: black;
border:1px solid black;

&:hover{
    background-color: black;
    border:1px solid white;
    color: white;
    transition: 0.3s background-color ease-in;

}
`