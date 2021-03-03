import './assets/scss/style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.component';

let keys = {};
  window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40:
            case 32: e.preventDefault(); break; 
            default: break; 
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
    },
false);

ReactDOM.render(<App />, document.querySelector('#root'));
