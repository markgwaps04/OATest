import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Modal from './Modal';
import "./css/global.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const modal_container = ReactDOM.createRoot(
  document.getElementById('modal_container') as HTMLElement
);

modal_container.render(
  <React.StrictMode>
    <Modal />
  </React.StrictMode>
);


