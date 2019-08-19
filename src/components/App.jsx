import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from '../store/store';

//Components
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <Provider store={store}>
      <div className='ui container'>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={StreamList} />
            <Route exact path='/streams/new' component={StreamCreate} />
            <Route exact path='/streams/edit/:id' component={StreamEdit} />
            <Route exact path='/streams/delete/:id' component={StreamDelete} />
            <Route exact path='/streams/show' component={StreamShow} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
