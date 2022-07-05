import {View, Text, TextInput, Image, StyleSheet, FlatList, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity,} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import keywords from '../sample-data/faults-n-fix';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home({navigation}) {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState('');

  const onChangeHandler = text => {
    setQuery(text);
    const _keyWord = keywords.filter((item, key) => item.title.toLowerCase().includes(text.toLowerCase()));
    setResult(_keyWord);
  };

  const isSearched = result.length > 0;
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={{backgroundColor: '#0A0A26', height: '100%'}}>
          <View>
            <View style={{height: 200}}>
              <Image source={require('../images/banner.jpg')} style={{top: -400, width: '100%'}} resizeMode="contain" />
            </View>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  fontWeight: 'bold',
                  paddingVertical: 10,
                  textAlign: 'center',
                }}>
                HOW CAN WE HELP YOU?
              </Text>
              <Text style={styles.logo}>
                <Text style={{color: '#0A0A26'}}>V</Text>FIX
              </Text>
            </View>
          </View>
          <View style={[styles.searchBar, {borderBottomLeftRadius: isSearched ? 0 : 10, borderBottomRightRadius: isSearched ? 0 : 10}]}>
            <View style={styles.search}>
              <Ionicons name="search" size={25} color="black" />
            </View>
            <TextInput placeholder="Search" value={query} onChangeText={onChangeHandler} style={{width: '70%', fontSize: 15, marginLeft: 5}} />
            <TouchableWithoutFeedback
              onPress={() => {
                setResult([]);
                setQuery('');
              }}>
              <Ionicons name="close" size={24} color="black" style={styles.searchRight} />
            </TouchableWithoutFeedback>
          </View>
          {isSearched && (
            <View style={styles.suggestionCard}>
              <FlatList
                data={result}
                renderItem={({item, index}) => {
                  return (
                    <View key={index} style={{paddingVertical: 8, flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name="search" size={24} color="black" />
                      <TouchableOpacity onPress={() => navigation.navigate('result', {id: item.id, title: item.title})}>
                        <Text style={{paddingLeft: 8}}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 900,
  },
  logo: {
    fontSize: 30,
    fontWeight: '900',
    color: '#E5D80D',
    // textShadowColor: '#3957ED',
    // textShadowOffset: {width: 0, height: 1},
    // textShadowRadius: 15,
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 30,
    height: 50,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  search: {
    backgroundColor: '#3957ED36',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    borderRadius: 30,
    marginLeft: 10,
  },
  searchRight: {
    paddingTop: 10,
    padding: 8,
  },
  suggestionCard: {
    marginHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#dbdbdb',
    flexDirection: 'row',
    maxHeight: 200,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },

  text: {
    color: '#3957ED',
    fontSize: 24,
    fontWeight: 'bold',
    // paddingBottom: 40,
  },
});
