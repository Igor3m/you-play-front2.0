import React from "react";

import 'toastr/build/toastr.min.js'

import './App.css';
import 'bootswatch/dist/cyborg/bootstrap.css'
import 'toastr/build/toastr.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

 
import Rotas from './Rotas';

function App() {
  return (

    <div className="App">

      <Rotas/>
        
    </div>
  );
}

export default App;
