import React from 'react'
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  const [serverResponse, setServerResponse] = React.useState('')
  
  function increment() {
    setCount(count + 1)
  }

  const endpoint = 'http://localhost:8080/endpoint/test'

  async function getServerResponse()  {
    // submit a POST request to the endpoint
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Hello World' })
    })
    .then(response => response.body.getReader().read()).then(result => {
      // result is a Uint8Array
      const decoder = new TextDecoder('utf-8')
      const decodedString = decoder.decode(result.value)
      setServerResponse(decodedString)
    }
    )

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spice up the UI even more!</h1>
        <div className="counter-wrapper">
          <h2>Count:</h2>
          <button className="btn btn-primary increment" onClick={increment}>Up by 1</button>
          <p className="count">{count}</p>
        </div>
        <div className="server-response-wrapper">
          <button className="btn btn-secondary" onClick={getServerResponse}>Get Server Response</button>
          <p className={`server-response ${serverResponse ? 'visible' : ''}`}>Server Response: {serverResponse}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
