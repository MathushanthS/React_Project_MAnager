import React from 'react';
import './App.css';
import Bookindex from './Project';
//import header from './Header/AppHeader'
import Sidebar from './SideBar/sidebar'
import AppHeader from './Header/AppHeader';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        
          <AppHeader/>  
          <Bookindex/>
      
      </header>
      </div>
      <div>
        {/* <Sidebar /> */}
        
      </div>



      <footer>
      <p>Defect Tracker, Copyright &copy; 2019</p>
    </footer>





    </div>


  );
}

export default App;
