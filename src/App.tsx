import React from 'react';
import logo from './logo.svg';
import './App.css';

//関数でAppというコンポーネントを定義している
function App() {
  return (
    //AppコンポーネントではHTML要素を返している
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>まつだたつや</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//定義したAppをデフォルトエクスポートしている
export default App;
