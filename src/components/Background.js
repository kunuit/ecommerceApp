import {Theme} from '@src/common/theme';
import React, {memo} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import Header from './header';

const Background = ({children, isButtonBack = false, relative = false}) => (
  <View style={styles.background}>
    <Header
      isBack={true}
      isBorder={true}
      isRight={false}
      styleRoot={{backgroundColor: Theme.backgrounds.transparent}}
    />
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
    {/* {isButtonBack ? <ButtonBack navigation={navigation} /> : <></>} */}
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Theme.backgrounds.white,
    paddingTop: Platform.OS ? 44 : 0,
  },
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
