import React from 'react';
import Head from 'next/head';
import makeStore from '../../store/index';
import { compose } from 'redux';
import withMui from './withStyles';
import withRedux from 'next-redux-wrapper';

export default Component => compose(
  withRedux(makeStore, state => state),
  withMui
)(Component);
