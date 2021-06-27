import Background from '@src/components/Background';
import Logo from '@src/components/Logo';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TextInputCus from '@components/TextInputCus';
import Button from '@src/components/Button';
import {Theme} from '@src/common/theme';
import {useNavigation} from '@react-navigation/native';
import {Router} from '@src/navigation/router';
import {emailValidator} from '../../modules/auth.validation';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }
    navigation.navigate(Router.Login);
  };

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
        Restore Password
      </Text>

      <TextInputCus
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onSubmitEditing={_onSendPressed}
        onChangeText={text => setEmail({value: text, error: ''})}
        // error={!!email.error}
        errorText={email.error}
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button
        style={{backgroundColor: Theme.colors.primary}}
        onPress={_onSendPressed}>
        <Text style={styles.text}>Send Reset Instructions</Text>
      </Button>

      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: Theme.colors.secondary,
    width: '100%',
    fontFamily: Theme.fontFamily.GilroyExtraBold,
  },
  text: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    fontSize: 15,
    color: Theme.backgrounds.white,
  },
});
