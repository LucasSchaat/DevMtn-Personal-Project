import React from 'react';
import './reset.css'
import './App.css';
import routes from './routes'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Route component={routes} />
    </div>
  );
}

export default App;
