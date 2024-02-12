import React, {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {
  const [usersData, setUsersData] = useState([{}]);
  const inputRef = useRef();

  useEffect(() => {
    fetch("/api/users").then(
      response => response.json()
    ).then(
      data => {
        setUsersData(data);
      }
    )
  }, []);

  const addUsers = () => {
    const data = {
      name: inputRef.current.value
    };
    fetch("/api/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      response => response.json()
    ).then(
      data => {
        console.log('user added!', data)
      }
    )
  }

  return (
    <div className="App">
      <div>
      {usersData.users ? usersData.users.map((user, i) => (
        <p>{user.name}</p>
      )) :
      <p>Loading...</p>}
      ADD USER:
      <input placeholder='enter name' ref={inputRef}/>
      <button onClick={addUsers}>ADD</button>
      </div>
    </div>
  );
}

export default App;
