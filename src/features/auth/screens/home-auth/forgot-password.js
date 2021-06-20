import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ForgotPassword = () => {
  return (
    <View style={styles.root}>
      <Text>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
