import React from 'react';
import logo from './Images/newlogo.png';
import './App.css';

function App() {
  return (
    <main className='App'>
      <div class='container'>
        <img src={logo} alt='logo' class='logodisplay' />
        <h1>RIDE AND SEEK</h1>
      </div>
    </main>
  );
}

export default App;