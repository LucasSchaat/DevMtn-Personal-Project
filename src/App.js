import React from 'react';
import './reset.css'
import './App.css';
import routes from './routes'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Route component={routes} />
    </div>
  );
}

export default App;
