import React, {Component} from 'react';
import RootNavigator from './src/navigation'
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './src/redux/store'
import {Provider} from 'react-redux';
import theme from './theme';
console.disableYellowBox = true;
EStyleSheet.build(theme);
type Props = {};
export default class App extends Component < Props > {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    );
  }
}