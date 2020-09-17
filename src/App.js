import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import {Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import CuriosityContainer from "./Components/Content/curiosity/curiosityContainer";
import OportunityContainer from "./Components/Content/Opportunity/oportunityContainer";
import SpiritContainer from "./Components/Content/Spirit/spiritContainer";
function App() {
  return (
      <div className='app-wrapper'>
          <Header className='app-header'/>
          <Navbar/>
          <div className='app-wrapper-content'>
              <Route path='/Curiosity'
                     render={ () => <CuriosityContainer/> } />
              <Route path='/Opportunity'
                     render={ () => <OportunityContainer/> } />
              <Route path='/Spirit'
                     render={ () => <SpiritContainer/> }/>
          </div>
          <Footer className='app-footer'/>
      </div>
  );
}

export default App;
