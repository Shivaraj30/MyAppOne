/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';

import AppLite from './AppLite';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppLite);
