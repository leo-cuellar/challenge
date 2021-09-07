import React, { useState, useEffect } from 'react';
import generateMessage, { Message } from './Api';

import MessageTable from './components/MessageTable';

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  return (
    <MessageTable messages={messages} setMessages={setMessages}/>
  );
}

export default App;
