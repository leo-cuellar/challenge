import React from 'react'
import styled from 'styled-components'
import { Message } from '../Api';
import { OrganizedMessage } from '../types';
import { OrgnanizeMessages } from '../helpers/OrganizeMessages';

import MessageElement from './MessageElement';

const TableContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
`

const TableColumn = styled.div`
    flex: 1;
    padding: 5px;
`

const TableColumnTitle = styled.h3`
    margin: 0;
`

const TableColumnSubtitle = styled.p`
    margin: 0;
    margin-bottom: 10px;
`

const MessageTable: React.FC<{ messages: Message[], setMessages: React.Dispatch<React.SetStateAction<Message[]>> }> = ({ messages, setMessages }) => {

    const OrganizedMessages: OrganizedMessage = OrgnanizeMessages(messages)

    return (
        <TableContainer>
            <TableColumn>
                <TableColumnTitle>
                    Error Type 1
                </TableColumnTitle>
                <TableColumnSubtitle>
                    Count {OrganizedMessages.ErrorMessages.length}
                </TableColumnSubtitle>
                <MessageElement messages={messages} OrganizedMessages={OrganizedMessages.ErrorMessages} setMessages={setMessages} />
            </TableColumn>
            <TableColumn>
                <TableColumnTitle>
                    Error Type 2
                </TableColumnTitle>
                <TableColumnSubtitle>
                    Count {OrganizedMessages.WarnMessages.length}
                </TableColumnSubtitle>
                <MessageElement messages={messages} OrganizedMessages={OrganizedMessages.WarnMessages} setMessages={setMessages} />
            </TableColumn>
            <TableColumn>
                <TableColumnTitle>
                    Error Type 3
                </TableColumnTitle>
                <TableColumnSubtitle>
                    Count {OrganizedMessages.InfoMessages.length}
                </TableColumnSubtitle>
                <MessageElement messages={messages} OrganizedMessages={OrganizedMessages.InfoMessages} setMessages={setMessages} />
            </TableColumn>
        </TableContainer>
    )
}

export default MessageTable