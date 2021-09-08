import React from 'react'
import styled from 'styled-components'
import { Message } from '../Api'
import { useMessageContext } from '../context/messageContext'

const TableColumnMessageContainer = styled.div<{ priority: number }>`
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    background-color: ${props => {
        if (props.priority === 0) return '#F56236'
        if (props.priority === 1) return '#FCE788'
        if (props.priority === 2) return '#88FCA3'
    }};
`

const ClearButton = styled.button`
    width: 50px;
    margin-top: 5px;
    align-self: flex-end;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const MessageElement: React.FC<{
    OrganizedMessages: { message: Message, originalIdx: number }[],
}> = ({ OrganizedMessages }) => {

    const {
        messages,
        setMessages
    } = useMessageContext() as any

    const HandleClear = (idx: number) => {
        const newMessages = [...messages]
        newMessages.splice(idx, 1)
        setMessages(newMessages)
    }

    return (
        <>
            {[...OrganizedMessages].reverse().map(({ message: { message, priority }, originalIdx }, idx) => (
                <TableColumnMessageContainer
                    data-testid='message-container'
                    key={message + idx}
                    priority={priority}
                >
                    {message}
                    <ClearButton
                        data-testid='message-clear-button'
                        onClick={() => HandleClear(originalIdx)}
                    >
                        Clear
                    </ClearButton>
                </TableColumnMessageContainer>
            ))}
        </>
    )
}

export default MessageElement