import React, { useContext } from 'react'

const messageContext = React.createContext({})

export const useMessageContext = () => useContext(messageContext)

export default messageContext