/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import PushNotification from 'react-native-push-notification';
import {name as appName} from './app.json';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('notification', notification);

    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);
