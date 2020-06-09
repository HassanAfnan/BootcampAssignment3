import React from 'react';
import './App.css';
import './index.css';

function App({name,age}) {
  return (
    <div>
      <h1 className="class1">React Assignment</h1>
      <strong className="class2">Hello World {name}</strong>
      <ul>
          <li className="class1">Home</li>
          <li className="class1">About</li>
          <li className="class1">Contact</li>
          <li className="class1">Apply</li>  
      </ul>  
      <h6> My Age is : { age + 2}</h6>
    </div>
  );
}
export default App;
