import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import routes from './routes'
import './reset.css'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store'
import { persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>  
        <HashRouter>
          <div>
            <ToastContainer/>
            <Route component={routes} />
          </div>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}
  
export default App;
