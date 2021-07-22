import React, {useEffect} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Theme} from '@common/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchView = ({holSearch, searchQuery, searchQueryValue}) => {
  const onChangeSearch = query => searchQueryValue(query);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder={`Search ${holSearch ? holSearch : 'Store'}`}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
        clearIcon={() => <Icon name="clear" size={20} color="black" />}
        icon={() => <Icon name="search" size={20} color="black" />}
        inputStyle={[
          {fontFamily: 'gilroy-bold'},
          {fontSize: 13},
          {borderWidth: 0},
        ]}
        on
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'center',
    width: '100%',
    borderColor: Theme.backgrounds.white,
    borderBottomColor: Theme.colors.lineBorder,
    borderWidth: 1,
  },
  searchBar: {
    width: '90%',
    backgroundColor: Theme.backgrounds.paper,
    borderRadius: 15,
    marginBottom: '2%',
    elevation: 0,
  },
});

export default SearchView;
