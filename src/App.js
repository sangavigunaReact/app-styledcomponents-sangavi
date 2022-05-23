import React from 'react';
import GlobalStyle from './Globalstyle';
import {Navbar, Footer} from './components';
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Home from './pages/homepage/home';
import Services from './pages/services/services';
import Products from './pages/Products/products';
import Contact from './pages/contact/contact';
import Signup from './pages/signup/signup';
import Scrolltotop from './components/scrolltotop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Scrolltotop />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/about' element={<Services />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
