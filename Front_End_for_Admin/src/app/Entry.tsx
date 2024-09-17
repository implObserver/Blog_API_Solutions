import React from 'react'
import ReactDOM from 'react-dom/client'
import { WithRedux } from './model/providers/WithRedux'
import App from './ui/App'
import { ScrollRestoration } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WithRedux>
      <App></App>
    </WithRedux>
  </React.StrictMode>,
);