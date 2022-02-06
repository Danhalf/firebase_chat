import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {AppRouter} from "./components/AppRouter";


function App() {
    return (
    <BrowserRouter>
        <Navbar userName={'get'}/>
        <AppRouter userName={''} />
    </BrowserRouter>
  );
}

export default App;
