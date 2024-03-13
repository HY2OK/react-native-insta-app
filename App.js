import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/components/Home';
import Search from './src/components/Search';
import Activity from './src/components/Activity';
import Profile from './src/components/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Status from './src/components/Status';
import FriendProfile from './src/components/FriendProfile';
import EditProfile from './src/components/EditProfile';

function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // eslint-disable-next-line react/no-unstable-nested-components
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
