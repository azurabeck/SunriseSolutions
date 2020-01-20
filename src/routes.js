import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Navbar from  './structure/navbar'
import Home from  './pages/home'
import About from  './pages/about'
import Services from  './pages/services'
import Contact from  './pages/contact'
import Budget from './pages/budget'

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/about' component={About}></Route> 
              <Route path='/services' component={Services}></Route>    
              <Route path='/contact' component={Budget}></Route>    
              <Route path='/budget' component={Budget}></Route>    
        </Switch>
    </div>
  );
}

export default App;
