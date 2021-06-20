import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import TabBarBottom from './screens/tab-bar-bottom';
import {Router} from './router';
import {
  Login,
  Register,
  HomeAuth,
  ForgotPassword,
} from '@features/auth/screens';

const Stack = createStackNavigator();

const configTabOther = {
  animation: 'timing',
  config: {
    duration: 300,
  },
};

const AppNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="TabBarBottom" component={TabBarBottom} />

      {[
        {name: Router.Login, component: Login},
        {name: Router.Register, component: Register},
        {name: Router.ForgotPassword, component: ForgotPassword},
      ].map(stack => {
        return (
          <Stack.Screen
            key={stack.name}
            name={stack.name}
            component={stack.component}
            options={{
              transitionSpec: {
                open: configTabOther,
                close: configTabOther,
              },
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
