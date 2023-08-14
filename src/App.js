import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import UserProfile from './components/UserProfile';
import MessageInput from './components/MessageInput';

function App() {
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleUserNameChange = (name) => {
    setUserName(name);
  };

  const handleUserMessageChange = (message) => {
    setUserMessage(message);
  };

  const handleProfilePicChange = (pic) => {
    setProfilePic(pic);
  };

  return (
    <div className="App">
      <h1 className='header'> Enter Your Details To get True Hindu Certificate</h1>
      <h1 className='header2'>Happy 77th Independence Day!</h1>
      <div className="container">


      </div>
      <UserProfile
        onUserNameChange={handleUserNameChange}

      />
      <MessageInput
        userMessage={userMessage}
        onUserMessageChange={handleUserMessageChange}
      />
        <Greeting userName={userName} />
      {/* Add a download button to download the header */}
    </div>
  );
}

export default App;
