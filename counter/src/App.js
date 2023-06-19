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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <p>{count}</p>
        <div style={{ paddingLeft: '10px' }}>
          <button onClick={increment}>Increment Counter</button>
        </div>
        <button onClick={getServerResponse}>Fetch from {endpoint}</button>
      </div>
      <p>Server's response: {serverResponse}</p>
    </div>
  );
}

export default App;