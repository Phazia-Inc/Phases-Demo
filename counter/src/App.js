import React from 'react'
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  const [serverResponse, setServerResponse] = React.useState('')
  
  function increment() {
    setCount(count + 1)
  }

  const endpoint = 'http://localhost:8080/endpoint/test'

  async function getServerResponse() {
    // submit a POST request to the endpoint
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Hello World' })
    })

    if (response.ok) {
      const text = await response.text()
      setServerResponse(text)
    }
  }

  return (
    <div className="App">
      <h1>Spice Up the UI!</h1>
      <p>The current count is: {count}</p>
      <button onClick={increment}>Add One</button>
      <button onClick={getServerResponse}>Get Server Response</button>
      <p>Server Response: {serverResponse}</p>
      <p>Made with ❤️ by [Your Name]</p>
    </div>
  )
}

export default App
