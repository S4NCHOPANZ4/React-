import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from '@reduxjs/toolkit'
import allReducers from './reducers'
import './index.css'
import { Provider } from 'react-redux'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
