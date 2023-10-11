import styled, { keyframes } from 'styled-components'


const typing = keyframes`
  from {
    width: 0
  }
`

const blinking = keyframes`
  50% {
    border-color: transparent;
  }
`

const CircleRed = styled.div`
    background: red;
    border-radius: 50%;
    width: 15px;
    height: 15px;
`

const CircleYellow = styled.div`
    background: yellow;
    border-radius: 50%;
    width: 15px;
    height: 15px;
`

const CircleGreen = styled.div`
    background: green;
    border-radius: 50%;
    width: 15px;;
    height: 15px;
`

const ConsoleContainer = styled.div`
    background-color: #1D1D1F;
    height: 67px;
    padding: 10px 20px;
    border-radius: 10px;
    div{
        display: flex; 
        flex-direction: row;
        align-items: center;

        span{
            color: #4682B4;
        }
        p{
            color: #2E8B57;
        }
        small{
            color: #F0E68C;
        }

    }
`

const AnimationDiv  = styled.div`
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    font-family: monospace;
    animation: ${typing} 5s steps(40), ${blinking} 0.5s infinite step-end alternate;
    width: 40ch;
    border-right: 3px solid;
    height: 14px;
    margin-top: 15px;
`

export {
    CircleRed,
    CircleYellow,
    CircleGreen,
    ConsoleContainer,
    AnimationDiv
}