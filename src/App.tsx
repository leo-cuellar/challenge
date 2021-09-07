import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import generateMessage, { Message } from './Api'

import MessageTable from './components/MessageTable'
import UserControls from './components/UserControls'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [running, setRunning] = useState<boolean>(true)

  useEffect(() => {
    let cleanUp: () => void = () => { }
    if (running) {
      cleanUp = generateMessage((message: Message) => {
        setMessages(oldMessages => [...oldMessages, message])
      })
    } else {
      cleanUp()
    }
    return cleanUp
  }, [setMessages, running])

  return (
    <AppContainer>
      <UserControls setMessages={setMessages} running={running} setRunning={setRunning} />
      <MessageTable messages={messages} setMessages={setMessages} />
    </AppContainer>
  )
}

export default App;
