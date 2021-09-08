import React from 'react'
import styled from 'styled-components'
import { Message } from '../Api';
import { OrganizedMessage } from '../types';
import { OrgnanizeMessages } from '../helpers/OrganizeMessages';

import MessageElement from './MessageElement';

import { useMessageContext } from '../context/messageContext';

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

const MessageTable: React.FC<{}> = () => {

    const { messages } = useMessageContext() as any

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
                <MessageElement OrganizedMessages={OrganizedMessages.ErrorMessages} />
            </TableColumn>
            <TableColumn>
                <TableColumnTitle>
                    Error Type 2
                </TableColumnTitle>
                <TableColumnSubtitle>
                    Count {OrganizedMessages.WarnMessages.length}
                </TableColumnSubtitle>
                <MessageElement
                    data-testid='warn-messages'
                    OrganizedMessages={OrganizedMessages.WarnMessages}
                />
            </TableColumn>
            <TableColumn>
                <TableColumnTitle>
                    Error Type 3
                </TableColumnTitle>
                <TableColumnSubtitle>
                    Count {OrganizedMessages.InfoMessages.length}
                </TableColumnSubtitle>
                <MessageElement OrganizedMessages={OrganizedMessages.InfoMessages} />
            </TableColumn>
        </TableContainer>
    )
}

export default MessageTable