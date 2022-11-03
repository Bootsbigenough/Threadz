import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchCloths from './SearchCloths';
import Cart from './pages/Cart';
import Checkout from './Checkout';
import Navbar from './navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='./search' 
            element={<SearchCloths />} 
          />
          <Route 
            path='/Cart' 
            element={<Cart />} 
          />
          <Route 
          path='/Checkout'
          element ={<Checkout />}
          />
          <Route 
         path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;

