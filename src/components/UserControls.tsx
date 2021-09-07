import React from 'react'
import styled from 'styled-components'
import { Message } from '../Api'

const ControlsContainer = styled.div`
    width: 165px;
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
`

const Control = styled.button`
    padding:  7px 15px;
    border-radius: 5px;
    border: none;
    background-color: #88FCA3;
    box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.25);
    cursor: pointer;
    font-weight: 700;
`

const UserControls: React.FC<{
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    running: boolean,
    setRunning: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setMessages, running, setRunning }) => {

    const handleToggle = () => {
        setRunning(!running)
    }

    const handleClear = () => {
        setMessages([])
    }

    return (
        <ControlsContainer>
            <Control onClick={handleToggle}>
                {running ? 'STOP' : 'START'}
            </Control>
            <Control onClick={handleClear}>
                CLEAR
            </Control>
        </ControlsContainer>
    )
}

export default UserControls