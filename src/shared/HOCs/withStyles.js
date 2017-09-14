import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import Head from 'next/head';
import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_TWO,
  PRIMARY_COLOR_THREE,
  ACCENT_COLOR_ONE,
  ACCENT_COLOR_TWO,
  ACCENT_COLOR__THREE
} from '../../constants/theme';
import AppBar from 'material-ui/AppBar';
import Link from 'next/link';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

try {
  injectTapEventPlugin();
} catch (e) {
  // prevent injectTapEventPlugin():
  // Can only be called once per application lifecycle
}

const withMaterialUI = ComposedComponent => {
  class HOC extends Component {
      static propTypes = {
        userAgent: PropTypes.string
      }

      static async getInitialProps(ctx) {
        const { req } = ctx;
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

        const subProps = await loadGetInitialProps(ComposedComponent, ctx);

        return {
          ...subProps,
          userAgent
        };
      }

      render() {
        const { userAgent = 'all' } = this.props;
        const Lato = '\'lato\', sans-serif';
        const muiTheme = getMuiTheme(
          {
            fontFamily: Lato,
            palette: {
              primary1Color: PRIMARY_COLOR,
              primary2Color: PRIMARY_COLOR_TWO,
              primary3Color: PRIMARY_COLOR_THREE,
              accent1Color: ACCENT_COLOR_ONE,
              accent2Color: ACCENT_COLOR_TWO,
              accent3Color: ACCENT_COLOR__THREE
            },
            appBar: {
              height: 50
            }
          },
          {
            userAgent
          }
        );


        return (
          <div>
            <Head>
              <title>Triplebyte App</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
            </Head>
            <style>
              {`
          form, .flex-col {
                display: flex;
                flex-direction: column;
                align-items: center;
          }
          `}
            </style>
            <MuiThemeProvider muiTheme={muiTheme}>
              <ComposedComponent
                {...this.props}
              />
            </MuiThemeProvider>
          </div>
        );
      }
  };

  return HOC;
};

export default withMaterialUI;
