import React from 'react';

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex items-center m-1  shadow-sm p-1">
      <img
        src="https://cdn5.vectorstock.com/i/1000x1000/73/39/user-icon-male-person-symbol-profile-avatar-vector-20787339.jpg"
        alt=""
        className="h-6 cursor-pointer "
      />
      <span className="font-bold mx-4">{name}</span>
      <span> {message}</span>
    </div>
  );
};

export default LiveMessage;
