const UserProfile = ({ name, age, onAgeChange }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={onAgeChange}>change age</button>
    </div>
  );
};

export default UserProfile;
