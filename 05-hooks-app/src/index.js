import React from 'react';
import ReactDOM from 'react-dom';
//import { CounterApp } from './components/01-use-state/CounterApp';
import { CounterWithCustomHook } from './components/01-use-state/CounterWithCustomHook';
//import { HookApp } from './HookApp';

ReactDOM.render(
  <CounterWithCustomHook />,
  document.getElementById('root')
);
