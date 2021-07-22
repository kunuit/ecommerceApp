import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '@common/theme';
import Header from '@components/header';
import SearchView from '@src/components/search-view';
import CategoryList from './category-list';

const ExploreScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.root}>
      <Header
        isBack={false}
        isRight={false}
        title="Explore"
        styleRoot={styles.header}
      />
      <SearchView
        searchQuery={searchValue}
        searchQueryValue={value => setSearchValue(value)}
      />
      <CategoryList />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.backgrounds.white,
  },
  header: {
    position: 'relative',
  },
});
