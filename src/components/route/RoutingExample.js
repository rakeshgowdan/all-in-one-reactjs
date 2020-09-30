import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  


import About from './About'  
import Contact from './Contact'  
  
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
     
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  
  </Router>  
)  

export default routing