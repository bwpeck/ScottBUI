import React from 'react';
import './App.css';
import Header from './components/header';
import StickyFooter from './components/footer';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <StickyFooter />
    </div>
  );
}

export default App;
