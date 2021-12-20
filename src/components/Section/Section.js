import React from 'react'
import styled, {keyframes} from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg">

                </DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props=> `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
    padding-top : 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:760px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    border-radius: 100px;
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0.85;
    text-transform:uppercase;
    font-size: 12px;
    cursor:pointer;
    margin:10px;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.7;
`

const animateDown = keyframes`
    0%, 20%, 50%, 80%, 100%{
        transform: translateY(0);
    }
    40%{
        transform: translateY(5px);
    }
    60%{
        transform: translateY(3px);
    }
`

const DownArrow = styled.img`
    margin-top:20px;
    height: 40px;
    animation-name: ${animateDown};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
`


const Buttons = styled.div`

`