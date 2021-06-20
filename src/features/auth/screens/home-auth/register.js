import Background from '@src/components/Background';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Register = () => {
  return (
    <Background>
      <View style={styles.root}>
        <Text>Register</Text>
      </View>
    </Background>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
