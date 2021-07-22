import {Theme} from '@src/common/theme';
import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Router} from '@src/navigation/router';

const Header = ({
  title,
  isBack,
  onPress,
  isBorder,
  styleRoot,
  isRight = true,
  ...props
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.root, styleRoot]}>
      <View style={styles.left}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          {isBack && (
            <View
              style={[
                styles.icon,
                {marginLeft: 12},
                isBorder
                  ? {
                      backgroundColor: Theme.backgrounds.buttonBack,
                    }
                  : {},
              ]}>
              <Icon
                name="left"
                size={20}
                color={
                  isBorder ? Theme.backgrounds.white : Theme.colors.secondary
                }
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.center,
          {color: isBorder ? Theme.colors.primary : Theme.colors.secondary},
        ]}>
        {title}
      </Text>
      <View style={styles.right}>
        {isRight && (
          <TouchableOpacity onPress={() => navigation.navigate(Router.Message)}>
            <View
              style={[
                styles.icon,
                {marginRight: 8},
                isBorder
                  ? {
                      backgroundColor: Theme.backgrounds.buttonBack,
                    }
                  : {},
              ]}>
              <Icon
                name="message1"
                size={20}
                color={
                  isBorder ? Theme.backgrounds.white : Theme.colors.secondary
                }
              />
            </View>
          </TouchableOpacity>
        )}
        {/* <View
          style={[
            styles.icon,
            {marginRight: 8},
            isBorder
              ? {
                  backgroundColor: Theme.backgrounds.buttonBack,
                }
              : {},
          ]}>
          <Icon name="message1" size={20} color={Theme.colors.secondary} />
        </View> */}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 44 + 8 : 8,
    backgroundColor: Theme.backgrounds.white,
    // backgroundColor: Theme.backgrounds.transparent,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    opacity: 1,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  left: {
    flex: 0.4,
    // textAlign: 'center',
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  center: {
    flex: 0.55,
    color: Theme.colors.secondary,
    fontFamily: Theme.fontFamily.QuicksandBold,
    fontSize: Theme.size.h4,
    justifyContent: 'center',
    textAlign: 'center',
  },
  right: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
