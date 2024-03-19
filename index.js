/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import PushNotification from 'react-native-push-notification';
import {name as appName} from './app.json';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('notification', notification);
  },

  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);
