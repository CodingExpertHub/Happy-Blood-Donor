import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {LoginDataProvider} from "./context/context";



ReactDOM.render(
    <LoginDataProvider>
     <BrowserRouter>
       <App />
      </BrowserRouter>,
    </LoginDataProvider>,
  document.getElementById("root")
);