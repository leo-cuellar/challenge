import { Message } from '../Api'
import { OrganizedMessage } from '../interfaces'

export const OrgnanizeMessages = (messages: Message[]): OrganizedMessage => {
    const ErrorMessages: {message: Message, originalIdx: number}[] = []
    const WarnMessages: {message: Message, originalIdx: number}[] = []
    const InfoMessages: {message: Message, originalIdx: number}[] = []

    for (let i = 0; i < messages.length; i++) {
        const message: Message = messages[i]
        const originalIdx: number = i
        if (message.priority === 0) ErrorMessages.push({message, originalIdx})
        if (message.priority === 1) WarnMessages.push({message, originalIdx})
        if (message.priority === 2) InfoMessages.push({message, originalIdx})
    }

    return {
        ErrorMessages,
        WarnMessages,
        InfoMessages
    }
}