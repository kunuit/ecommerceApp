import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import TabBarBottom from './screens/tab-bar-bottom';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="TabBarBottom" component={TabBarBottom} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
