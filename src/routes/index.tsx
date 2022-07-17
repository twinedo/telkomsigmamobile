import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesParam} from './types';
import {Home, SplashScreen} from '../pages';

const Stack = createStackNavigator<RoutesParam>();

const Routes = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default Routes;
