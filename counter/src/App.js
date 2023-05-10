import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [serverResponse, setServerResponse] = useState('');

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  const endpoint = 'http://localhost:8080/endpoint/test';

  async function getServerResponse() {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello World' }),
    });

    const result = await response.arrayBuffer();
    const decoder = new TextDecoder('utf-8');
    const decodedString = decoder.decode(result);
    setServerResponse(decodedString);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <button onClick={getServerResponse}>Get Server Response</button>
        <p>Server Response: {serverResponse || 'No response yet'}</p>
      </header>
    </div>
  );
}

export default App;
