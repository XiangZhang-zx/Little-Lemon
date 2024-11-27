import React from 'react';
import './App.css';
import BookingPage from './components/BookingPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BookingPage />
      <Footer />
    </div>
  );
}

export default App;
