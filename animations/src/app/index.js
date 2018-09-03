import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apiSetup } from '../config/api';

import AppNavigator from './components/AppNavigator';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    apiSetup(dispatch);
  }

  render() {
    return <AppNavigator />;
  }
}

export default connect()(App);
