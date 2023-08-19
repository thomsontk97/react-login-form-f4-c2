import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      fetch(`https://dummyjson.com/users/${storedUser.id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <p>Email: {user.email}</p>
          {/* Display other user details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
