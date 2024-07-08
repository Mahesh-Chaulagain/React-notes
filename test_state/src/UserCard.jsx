import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, age, email }) => {
  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

// Define the prop types for the UserCard component
UserCard.propTypes = {
  name: PropTypes.string.isRequired, // A required string prop
  age: PropTypes.number.isRequired,  // A required number prop
  email: PropTypes.string,           // An optional string prop
};

export default UserCard;

