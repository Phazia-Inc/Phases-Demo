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
      <header className="header">
        <h1 className="title">Spiced Counter</h1>
      </header>
      <p className="count">{count}</p>
      <button className="btn count-btn" onClick={increment}>Up by 1</button>
      <div className="divider"></div>
      <button className="btn response-btn" onClick={getServerResponse}>Get Server Response</button>
      <p className="response-text">Server Response: {serverResponse}</p>

      <h2 className="sub-title">Subheading</h2>
      <div className="row">
        <div className="figure-row">
          <figure>
            <img src="https://picsum.photos/seed/picsum/200/300?grayscale" alt="placeholder" />
            <figcaption>Image Caption</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/seed/picsum/200/300?grayscale" alt="placeholder" />
            <figcaption>Image Caption</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/seed/picsum/200/300?grayscale" alt="placeholder" />
            <figcaption>Image Caption</figcaption>
          </figure>
        </div>

        <div className="clock">
          <h3>Analog Clock</h3>
          <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#000" strokeWidth="8"/>
            <line x1="100" y1="100" x2="100" y2="55"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  transform="rotate(150, 100, 100)"/>
            <line x1="100" y1="100" x2="100" y2="45"
                  stroke="#000"
                  strokeWidth="6"
                  strokeLinecap="round"
                  transform="rotate(180, 100, 100)"/>
            <line x1="100" y1="100" x2="100" y2="35"
                  stroke="#000"
                  strokeWidth="9"
                  strokeLinecap="round"
                  transform="rotate(210, 100, 100)"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
