import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import { Countries } from './components/Countries';
import { Header } from './components/Header';
import Filter from './components/Filter';
import { CountryInfo } from './components/CountryInfo';
// import { Homepage } from './views/Homepage';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={[<Countries/>]}/>
      <Route path='/countries/:name' element={<CountryInfo/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
    
  );
}

export default App;
