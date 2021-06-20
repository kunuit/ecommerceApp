import Toast from 'react-native-toast-message';

export const showToast = ({message, type, title}) => {
  Toast.show({
    type: type, // success | error | info
    position: 'top',
    text1: title,
    text2: message + ' 👋',
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 50,
    bottomOffset: 40,
    // onShow: () => {},
    // onHide: () => {},
    onPress: () => {},
  });
};
