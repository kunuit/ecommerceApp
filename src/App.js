/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Theme} from '@common/theme';
import LottieView from 'lottie-react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1, backgroundColor: Theme.backgrounds.white}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>hello moi nguoi luv</Text>
        <LottieView
          source={require('@src/assets/images/truck.json')}
          style={{height: 35}}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default () => {
  return <App />;
};

const styles = StyleSheet.create({});
