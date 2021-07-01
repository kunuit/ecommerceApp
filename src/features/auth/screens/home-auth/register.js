import Background from '@src/components/Background';
import Logo from '@src/components/Logo';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import TextInputCus from '@components/TextInputCus';
import Button from '@src/components/Button';
import {Router} from '@src/navigation/router';
import {Theme} from '@src/common/theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  nameValidator,
  emailValidator,
  passwordValidator,
  phoneValidator,
  addressValidator,
} from '../../modules/auth.validation';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  let ref_input1 = useRef();
  let ref_input2 = useRef();
  let ref_input3 = useRef();
  let ref_input4 = useRef();
  let ref_input5 = useRef();
  let ref_input6 = useRef();
  let ref_input7 = useRef();
  const navigation = useNavigation();
  const [name, setName] = useState({value: '', error: ''});
  const [fullName, setFullName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: '',
  });
  const [phone, setPhone] = useState({value: '', error: ''});
  const [address, setAddress] = useState({value: '', error: ''});

  const {errorRegister, isRegister, isRegisterLoading} = useSelector(
    state => state.auth,
  );

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const fullNameError = nameValidator(fullName.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = passwordValidator(confirmPassword.value);
    const phoneError = phoneValidator(phone.value);
    const addressError = addressValidator(address.value);

    if (
      emailError ||
      passwordError ||
      fullNameError ||
      nameError ||
      phoneError ||
      addressError
    ) {
      setName({...name, error: nameError});
      setFullName({...fullName, error: fullNameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      setConfirmPassword({...confirmPassword, error: confirmPasswordError});
      setPhone({...phone, error: phoneError});
      setAddress({...address, error: addressError});
      return;
    }

    if (password.value !== confirmPassword.value) {
      setConfirmPassword({...confirmPassword, error: 'Not same password'});
      return;
    }

    dispatch({
      type: typeAuths.register,
      payload: {
        username: name.value,
        fullName: fullName.value,
        // email: email.value,
        password: password.value,
        // phone: phone.value,
        // addressDetail: address.value,
      },
    });
  };

  useEffect(() => {
    if (isRegister) {
      navigation.goBack();
      dispatch({
        type: typeAuths.changeFields,
        payload: {
          changeFields: {
            isRegister: false,
            errorRegister: null,
          },
        },
      });
    }
  }, [isRegister]);

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
        Create account
      </Text>

      {errorRegister && <Text style={styles.error}>{errorRegister}</Text>}

      <TextInputCus
        label="Username"
        returnKeyType="next"
        inputRef={ref => (ref_input1.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input2.current.focus()}
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        errorText={name.error}
      />

      <TextInputCus
        label="Full name"
        returnKeyType="next"
        inputRef={ref => (ref_input2.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input3.current.focus()}
        value={fullName.value}
        onChangeText={text => setFullName({value: text, error: ''})}
        errorText={fullName.error}
      />

      <TextInputCus
        label="Email"
        returnKeyType="next"
        inputRef={ref => (ref_input3.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input4.current.focus()}
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        errorText={email.error}
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInputCus
        label="Password"
        returnKeyType="next"
        inputRef={ref => (ref_input4.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input5.current.focus()}
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        isPwd
      />

      <TextInputCus
        label="Confirm Password"
        returnKeyType="next"
        inputRef={ref => (ref_input5.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input6.current.focus()}
        value={confirmPassword.value}
        onChangeText={text => setConfirmPassword({value: text, error: ''})}
        errorText={confirmPassword.error}
        isPwd
      />

      <TextInputCus
        label="Phone"
        returnKeyType="next"
        inputRef={ref => (ref_input6.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input7.current.focus()}
        value={phone.value}
        onChangeText={text => {
          setPhone({value: text, error: ''});
        }}
        keyboardType="phone-pad"
        errorText={phone.error}
      />

      <TextInputCus
        label="Address"
        returnKeyType="done"
        inputRef={ref => (ref_input7.current = ref)}
        onSubmitEditing={_onSignUpPressed}
        value={address.value}
        onChangeText={text => setAddress({value: text, error: ''})}
        errorText={address.error}
      />

      <Button
        style={{backgroundColor: Theme.colors.primary}}
        onPress={_onSignUpPressed}
        disabled={isRegisterLoading}>
        {isRegisterLoading ? (
          <ActivityIndicator
            style={{opacity: 1}}
            animating={true}
            size="small"
            color="#fff"
          />
        ) : (
          <Text style={styles.text}>Register</Text>
        )}
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(Router.Login)}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Theme.colors.secondary,
    fontFamily: Theme.fontFamily.GilroyLight,
  },
  text: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    fontSize: 15,
    color: Theme.backgrounds.white,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    paddingBottom: 30,
  },
  link: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    color: Theme.colors.primary,
  },
  error: {
    width: '70%',
    color: Theme.colors.error,
    fontFamily: Theme.fontFamily.QuicksandMedium,
    fontSize: Theme.size.small,
    textAlign: 'center',
  },
});

export default RegisterScreen;
