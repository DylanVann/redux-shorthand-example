import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<AppContainer />, document.getElementById('root'))
registerServiceWorker()
