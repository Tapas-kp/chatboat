import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      actions.handleGreeting();
    } else if (lowerCaseMessage.includes('what is your name')) {
      actions.handleQuestion();
    } else if (lowerCaseMessage.includes('how can you help')) {
      actions.handleMadad();
    } else if (lowerCaseMessage.includes('what is the weather today')) {
      actions.handleWeather();
    }
  };

  return (
    <>
      {React.Children.map(children, (child) => 
        React.cloneElement(child, {
          parse,
          actions,
        })
      )}
    </>
  );
};

export default MessageParser;
