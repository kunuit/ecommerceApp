/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {Theme} from '@common/theme';
import {store, persistor} from './state/store';
import AppNavigation from './navigation/index';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: Theme.backgrounds.white}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Theme.backgrounds.white}
      />
      <AppNavigation />

      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});
