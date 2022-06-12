import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" style={styles.search} size={30} color="black" />
      <TextInput placeholder="search" style={{width: '80%', fontSize: 15}} />
      <Ionicons name="close" size={24} color="black" style={styles.searchRight} />
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  search: {
    padding: 5,
    fontWeight: 50,
  },
  searchRight: {
    marginTop: 5,
  },
});
