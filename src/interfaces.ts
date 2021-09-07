import { Message } from './Api';

export interface OrganizedMessage {
    ErrorMessages: { message: Message, originalIdx: number }[],
    WarnMessages: { message: Message, originalIdx: number }[],
    InfoMessages: { message: Message, originalIdx: number }[]
}
