import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Store from './store'
import Routes from './router'
import Loader from './components/Loader'

const history = createBrowserHistory()

function App() {
  return (
    <Provider store={Store}>
      <StylesProvider injectFirst>
            <CssBaseline />
            <Router history={history}>
                <React.Suspense fallback={<Loader />}>
                  <Routes />
                </React.Suspense>
            </Router>
      </StylesProvider>
    </Provider>
  )
}

export default App