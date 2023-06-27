import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [serverResponse, setServerResponse] = React.useState('');

  function increment() {
    setCount(count + 1);
  }

  const endpoint = 'http://localhost:8080/endpoint/test';

  async function getServerResponse() {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello World' }),
    })
      .then((response) => response.body.getReader().read())
      .then((result) => {
        const decoder = new TextDecoder('utf-8');
        const decodedString = decoder.decode(result.value);
        setServerResponse(decodedString);
      });
  }

  return (
    <div className="App">
      <p style={{ color: 'red' }}>Count: {count}</p>
      <button onClick={increment}>Up by 1</button>
      <button onClick={getServerResponse}>Get Server Response</button>
      <p>The server said: {serverResponse}</p>
    </div>
  );
}

export default App;