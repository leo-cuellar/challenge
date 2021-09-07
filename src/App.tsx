import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import generateMessage, { Message } from './Api'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close';

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
  const [snackBar, setSnackBar] = useState('')

  const handleSnackBarClose = (event?: any, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackBar('')
  };

  useEffect(() => {
    let cleanUp: () => void = () => { }
    if (running) {
      cleanUp = generateMessage((message: Message) => {
        setMessages(oldMessages => [...oldMessages, message])
        setSnackBar(message.message)
      })
    } else {
      cleanUp()
    }
    return cleanUp
  }, [setMessages, running])

  return (
    <AppContainer>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={snackBar !== ''}
        autoHideDuration={2000}
        onClose={handleSnackBarClose}
        message={snackBar}
        action={
          <React.Fragment>
            <IconButton aria-label="close" color="inherit" onClick={handleSnackBarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <UserControls setMessages={setMessages} running={running} setRunning={setRunning} />
      <MessageTable messages={messages} setMessages={setMessages} />
    </AppContainer>
  )
}

export default App;
