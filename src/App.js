import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import { Countries } from './components/Countries';
import { Header } from './components/Header';
import Filter from './components/Filter';
import { CountryInfo } from './components/CountryInfo';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={[<Filter/>,<Countries/> ]}/>
      <Route path='/countries/:name' element={<CountryInfo/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
    
    // <Routes>
    // <Header/>
    //   <Route exacr path='/'>    
    //   <Filter/>
    //   <Countries/>
    //   </Route>
    //   <Route path='/countries/:name' children={<CountryInfo/>}/>
    // </Routes>
  );
}

export default App;
