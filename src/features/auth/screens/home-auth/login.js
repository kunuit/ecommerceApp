import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '@src/components/Background';

const Login = () => {
  return (
    <Background>
      <View style={styles.root}>
        <Text>login</Text>
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
