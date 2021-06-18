import {Theme} from '@src/common/theme';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Router} from '../router';

const TabBarIcon = ({name, focused, ...props}) => {
  return (
    <View style={styles.root}>
      {name === Router.Shop && (
        <Image
          source={
            focused
              ? require('@src/assets/images/icons/shop-active.png')
              : require('@src/assets/images/icons/shop.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}
      {name === Router.Explore && (
        <Image
          source={
            focused
              ? require('@src/assets/images/icons/explore-active.png')
              : require('@src/assets/images/icons/explore.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}
      {name === Router.Heart && (
        <Image
          source={
            focused
              ? require('@src/assets/images/icons/heart-active.png')
              : require('@src/assets/images/icons/heart.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}
      {name === Router.Cart && (
        <Image
          source={
            focused
              ? require('@src/assets/images/icons/cart-active.png')
              : require('@src/assets/images/icons/cart.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}
      {name === Router.Profile && (
        <Image
          source={
            focused
              ? require('@src/assets/images/icons/user-active.png')
              : require('@src/assets/images/icons/user.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}

      {focused && <Text style={styles.text}>{name}</Text>}
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 4,
  },
  text: {
    fontFamily: Theme.fontFamily.RobotoBold,
    fontSize: Theme.size.small,
    color: Theme.colors.secondary,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
