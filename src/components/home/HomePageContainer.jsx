import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress } from '../../actions/progress';
import HomePage from './HomePage';

export function HomePageContainer(props) {
  return (
    <HomePage
      incrementFunction={incrementProgressAction}
      decrementFunction={decrementProgressAction}
    />  );
}
