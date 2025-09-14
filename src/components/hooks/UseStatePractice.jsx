import React, { useState } from "react";

const DrivedState = () => {
  const [users, setUsers] = useState([
    { name: "John", age: 28 },
    { name: "Jane", age: 22 },
    { name: "Bob", age: 35 },
    { name: "Alice", age: 30 },
  ]);

  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((currEle, index) => {
          return (
            <li key={index}>
              {`Name: ${currEle.name}, Age: ${currEle.age} year old`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DrivedState;
