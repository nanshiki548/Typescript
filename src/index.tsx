import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  //App.jsからApp関数を取り込んでいる
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
//import Parent from './components/ContainterSample'
import Page from './components/Contextsample';
import {Parent} from './components/Parent';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  //index.htmlにあるrootをIDに持つ要素を指定している。
  document.getElementById('root') as HTMLElement
);
root.render(
  //描画するJSXタグを指定している
  //Appはsrc/App.tsxからインポートしたものを使用している
  <React.StrictMode>
    
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
