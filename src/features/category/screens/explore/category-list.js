import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import {HeightScreen} from '@src/common/theme';
import CategoryItem from '../../components/category-item';

const CategoryList = ({isHome = false}) => {
  const {showLoading, categories} = useSelector(state => state.category);

  return (
    <View
      style={[
        styles.container,
        isHome ? {} : {paddingBottom: HeightScreen * 0.09},
      ]}>
      {!showLoading ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={isHome}
          numColumns={isHome ? null : 2}
          showsVerticalScrollIndicator={false}
          data={[...Object.values(categories.list)]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) =>
            item == 'empty' ? (
              <View style={styles.cardItemContainer}></View>
            ) : (
              <View style={styles.cardItemContainer}>
                {isHome ? (
                  <Text>{item.name}</Text>
                ) : (
                  <CategoryItem item={item} />
                )}
              </View>
            )
          }
        />
      ) : (
        <View>
          {/* {isHome ? <CategoryHomeLoader /> : <MainLoading padding={30} />} */}
          <Text> dang load...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    margin: 'auto',
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    height: 230,
    borderColor: '#53B174',
    borderRadius: 20,
    borderWidth: 1,
  },
  cardImageContainer: {
    height: '45%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardDetailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'gilroy-bold',
    fontSize: 18,
    color: 'black',
    height: 'auto',
  },
});

export default CategoryList;
