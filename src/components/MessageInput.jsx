import React from 'react';

function MessageInput({ userMessage, onUserMessageChange }) {
  const handleUserMessage = (e) => {
    onUserMessageChange(e.target.value);
  };

  return (
    <div className="message-input">
      <textarea
        rows="4"
        placeholder="Write your message here"
        value={userMessage}
        onChange={handleUserMessage}
      />
      <div className="message-preview">
        <h2>Template:</h2>
        <div className='container'>

        <p className='message'>{userMessage}</p>

        </div>
      </div>
    </div>
  );
}

export default MessageInput;
