import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Component1 from './components/comp/Component1';
import Component2 from './components/comp/Component2';
import MyReact from './components/comp/MyReact';
import MyReactState from './components/comp/MyReactState';
import AppForceUpdate from './components/comp/AppForceUpdate';
import PropValid from './components/comp/PropValid';
import AppFragments from './components/comp/AppFragments';
import MyHocComp from './components/HOC/MyHocComp';
import Caller from './components/ErrorBound/Caller';
import AppCall from './components/ReactContext/AppCall';
import AxiosGetPersonList from './components/Axios/AxiosGetPersonList';
import AxiosPostPerson from './components/Axios/AxiosPostPerson';
import AxiosDeletePerson from './components/Axios/AxiosDeletePerson';
import AxiosAsyncAwait from './components/Axios/AxiosAysncAwait';
ReactDOM.render(
  <React.StrictMode>
     
  <Router>  

    <div>  
    <h1>React Index</h1>  
	<ol>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          {/*class Component*/}
          <Link to="/component1">Class Component</Link>  
        </li>  
        <li>  
            {/*Function Component*/}
          <Link to="/component2">Function Component</Link>  
        </li> 
        <li>  
            {/*Props Component*/}
          <Link to="/myReact">Props Example</Link>  
        </li> 
        <li>  
            {/*State Component*/}
          <Link to="/myReactState">State Example</Link>  
        </li> 
        <li>  
            {/*Props Validation*/}
          <Link to="/propValid">Props Validation</Link>  
        </li> 
        <li>  
            {/*ForceUpdate*/}
          <Link to="/appForceUpdate">Component API-ForceUpdate()</Link>  
        </li> 
        <li>  
            {/*App Fragments*/}
          <Link to="/appFragments">React Fragments</Link>  
        </li>  
        <li>  
            {/*Higher Order Components*/}
          <Link to="/myHocComp">Higher order components</Link>  
        </li>   
        <li>  
            {/*React Context*/}
          <Link to="/appCall">React Context</Link>  
        </li>  
        <li>  
            {/*Axios*/}
          <Link to="/">React Axios</Link>  
        </li> 
        <li>  
            {/*Error Boundaries*/}
          <Link to="/caller">Error Boundaries </Link>  
        </li> 

        <li>  
            {/*Error Boundaries*/}
          <Link to="/axiosGetPersonList">axios Get[axios.get(url) ]</Link>  
        </li>    
        
        <li>  
            {/*Error Boundaries*/}
          <Link to="/axiosPostPerson">axios Post[axios.Post(url) ]</Link>  
        </li>  
        
        <li>  
            {/*Error Boundaries*/}
          <Link to="/axiosDeletePerson">axios Delete[axios.Delete(url) ]</Link>  
        </li>  
        
        <li>  
            {/*Error Boundaries*/}
          <Link to="/axiosAsyncAwait">axios AsyncAwait</Link>  
        </li>  
      </ol>  
     
      <Route exact path="/" component={App} />  
      <Route path="/component1" component={Component1} />  
      <Route path="/component2" component={Component2} /> 
      <Route path="/myReact" component={MyReact} />  
      <Route path="/myReactState" component={MyReactState} />
      <Route path="/propValid" component={PropValid} /> 
      <Route path="/appForceUpdate" component={AppForceUpdate} />  
      <Route path="/appFragments" component={AppFragments} />  
      <Route path="/myHocComp" component={MyHocComp} /> 
      <Route path="/caller" component={Caller} /> 
      <Route path="/appCall" component={AppCall} />
      <Route path="/axiosGetPersonList" component={AxiosGetPersonList} />  
      <Route path="/AxiosPostPerson" component={AxiosPostPerson} />  
      <Route path="/axiosDeletePerson" component={AxiosDeletePerson} /> 
      <Route path="/axiosAsyncAwait" component={AxiosAsyncAwait} />  
    </div>  
  </Router>  

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
