import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';

import config from './bots/config';
import MessageParser from './bots/MessageParser';
import ActionProvider from './bots/ActionProvider';

const App = () => {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default App;
