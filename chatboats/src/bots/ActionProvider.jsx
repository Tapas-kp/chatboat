import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGreeting = () => {
    const botMessage = createChatBotMessage('Hello! How can I assist you today?');
    updateChat(botMessage);
  };

  const handleQuestion = () => {
    const botMessage = createChatBotMessage('My name is Chatbot.');
    updateChat(botMessage);
  };

  const handleMadad = () => {
    const botMessage = createChatBotMessage('I can assist you with your queries.');
    updateChat(botMessage);
  };

  const handleWeather = () => {
    const botMessage = createChatBotMessage('The weather is sunny.');
    updateChat(botMessage);
  };

  // Helper function to update the chatbot's state
  const updateChat = (message) => {
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <>
      {React.Children.map(children, (child) => 
        React.cloneElement(child, {
          actions: {
            handleGreeting,
            handleQuestion,
            handleMadad,
            handleWeather,
          },
        })
      )}
    </>
  );
};

export default ActionProvider;
