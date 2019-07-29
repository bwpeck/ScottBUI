import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Header from './components/header';
import StickyFooter from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <StickyFooter />
    </div>
  );
}

export default App;
