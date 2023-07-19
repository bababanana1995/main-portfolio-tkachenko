import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./component/header/Header";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import {WelcomeBlock} from "./component/welcome_block/WelkomeBlock";
import {Skills} from "./component/skils/Skils";
import {Contact} from "./component/contact/Contact";
import {MyProjects} from "./component/my_works/MyProjects";
import {Footer} from "./component/footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Routes>
                  <Route path={'/welcome'} element={<WelcomeBlock/>}/>
                  <Route path={'/skills'} element={<Skills/>}/>
                  <Route path={'/my_projects'} element={<MyProjects/>}/>
                  <Route path={'contacts'} element={<Contact/>}/></Routes>
                  <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
