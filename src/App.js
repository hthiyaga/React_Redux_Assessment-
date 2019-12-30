import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>RTS_LABS_ASSESSMENT</p>
        <Provider store={store}>
          <Router>
            <Fragment>
              <Switch>
                <Route exact path='/' component={Search} />
              </Switch>
            </Fragment>
          </Router>
        </Provider>
      </header>
    </div>
  );
}

export default App;
