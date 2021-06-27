import {Theme} from '@src/common/theme';
import React, {memo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const TextInputCus = (
  {errorText, label, value, forwardRef, isIcon, isPwd, ...props},
  ref,
) => {
  const [isShowPwd, setIsShowPwd] = useState(isPwd ? true : false);
  const [isShowLabel, setIsShowLabel] = useState(false);

  const _onFocus = boolean => {
    setIsShowLabel(boolean);
  };

  return (
    <View style={[styles.root]}>
      <View
        style={[
          styles.inputContainer,
          {
            borderBottomColor: isShowLabel
              ? Theme.colors.primary
              : Theme.colors.lineBorder,
          },
        ]}>
        {(isShowLabel || !!value) && (
          <View style={styles.label}>
            <Text style={styles.textLabel}>{label}</Text>
          </View>
        )}
        <TextInput
          style={styles.input}
          ref={input => props.inputRef && props.inputRef(input)}
          blurOnSubmit={props.blurOnSubmit}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType="done"
          onFocus={() => _onFocus(true)}
          onBlur={() => _onFocus(false)}
          // ref={ref_input2}
          // onSubmitEditing={_onLoginPressed}
          // onChangeText={text => setPassword({value: text, error: ''})}
          // value={password.value}
          placeholderTextColor={Theme.colors.lightGreyColor}
          secureTextEntry={isShowPwd}
          {...props}
          placeholder={label}
        />
        {isPwd && (
          <View style={[styles.icon, styles.iconPwd]}>
            <TouchableOpacity onPress={() => setIsShowPwd(!isShowPwd)}>
              <Icon
                name={isShowPwd ? 'eye' : 'eye-with-line'}
                color={Theme.colors.lightGreyColor}
                size={22}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

export default memo(TextInputCus);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginTop: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
  },
  input: {
    color: Theme.colors.notBlack,
    paddingLeft: 8,
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 15,
  },
  textLabel: {
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
    color: Theme.colors.primary,
    fontSize: Theme.size.small,
  },
  error: {
    width: '70%',
    color: Theme.colors.error,
    fontFamily: Theme.fontFamily.QuicksandMedium,
    fontSize: Theme.size.small,
  },
  icon: {
    flex: 0.2,
    alignItems: 'center',
  },
});
