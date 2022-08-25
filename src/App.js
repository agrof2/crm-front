import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Content from "./Components/Basic Structure/Content";
import Menu from "./Components/Basic Structure/Menu";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
