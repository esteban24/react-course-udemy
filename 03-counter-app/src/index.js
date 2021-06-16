import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import CounterApp from './components/CounterApp'
import './index.css';

const root = document.querySelector('#root');

ReactDOM.render(<App greeting="Hi, I'm Goku"/>, root);
// ReactDOM.render(<CounterApp />, root);
