import React from 'react';
import ToDoList from './components/ToDoList';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello</h1>
      <TemperatureConverter />
      <ToDoList />
    </div>
  );
}

export default App;
