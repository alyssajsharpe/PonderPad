import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from'./components/Footer';

function App() {
  return (
    <>
    <div className="App">
        <header className="App-header">
          <Header />
          <Home />
          <Footer />
        </header>
      </div></>
  );
}

export default App;
