import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import state from './redux/state';
import {addPost} from './redux/state';
import { changeLetters } from './redux/state';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender=(state)=>{


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} changeLetters={changeLetters}/>
    </BrowserRouter>
  </React.StrictMode>
)}
