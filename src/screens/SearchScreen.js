import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };

  return (
    //   Flex of 1 tells React Native to not force everything into available screen view &
    //   Only fill in space thats available
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {/* ScrollView allows you to scroll vertically if content extends outside of vertical screen */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title={'Cost Effective'}
          //   Each screen in app can access navigation prop automatically
          // Props contains various convenience fxns such as navigate()
          //   navigate(): Go to another screen
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title={'Bit Pricier'}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title={'Big Spender'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
