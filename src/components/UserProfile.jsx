import React, { useState } from 'react';

function UserProfile({ onUserNameChange, onProfilePicChange }) {
  const [userName, setUserName] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
    onUserNameChange(e.target.value);
  };

  const handlePicChange = (e) => {
    const pic = e.target.files[0];
    setProfilePic(URL.createObjectURL(pic));
    onProfilePicChange(pic);
  };

  return (
    <div className="user-profile">
      
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleNameChange} className='name'
      />
      {/* <input type="file" accept="image/*" onChange={handlePicChange} />
      {profilePic && <img src={profilePic} alt="Profile" />} */}
    </div>
  );
}

export default UserProfile;
