import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Button from '@src/components/Button';
import {Theme} from '@src/common/theme';
import Background from '@src/components/Background';
import Logo from '@src/components/Logo';
import {Router} from '@src/navigation/router';

const HomeAuth = () => {
  // const {isRegister} = useSelector(state => state.auth);
  // const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Background>
      <Logo />

      <Text
        style={{
          textAlign: 'center',
          fontFamily: Theme.fontFamily.QuicksandSemiBold,
          fontSize: Theme.size.large,
          paddingBottom: 20,
        }}>
        Get your groceries with nectar
      </Text>
      <Button
        style={{backgroundColor: Theme.colors.primary}}
        onPress={() => navigation.navigate(Router.Login)}>
        <Text style={styles.text}>Login</Text>
      </Button>
      <Button
        style={{backgroundColor: Theme.backgrounds.paper}}
        onPress={() => navigation.navigate(Router.Register)}>
        <Text style={[styles.text, {color: Theme.colors.primary}]}>
          Register
        </Text>
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
    fontSize: 15,
    color: Theme.backgrounds.white,
  },
});

export default HomeAuth;
