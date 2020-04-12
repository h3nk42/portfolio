import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="UpLeftDiv" >
              <h1>HENK</h1>
          </div>
          <div className="UpRightDiv" ></div>
          <div className="DownLeftDiv" >
              <h1>DER</h1>
          </div>
          <div className="DownRightDiv" ></div>
      </header>
        <body className="App-body">
        <div className="UpLeftDiv" > </div>
        <div className="UpRightDiv" >
            <h1>VAN</h1>
        </div>
        <div className="DownLeftDiv" ></div>
        <div className="DownRightDiv" >
            <h1>SLOOT</h1>
        </div>
        </body>
    </div>
  );
}

export default App;
