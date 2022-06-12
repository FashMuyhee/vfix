import React, {useEffect, useState} from 'react';
import {AppRegistry, SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import Panel from '../components/Panel';
import contents from '../sample-data/faults-n-fix';
import Search from '../components/Search';

const SearchResult = ({navigation, route}) => {
  const [quest, setQuest] = useState(null);

  useEffect(() => {
    const _keyWord = contents.find((item, key) => item.id == route.params.id);
    setQuest(_keyWord);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* <Search /> */}
      {quest?.fix?.map((quest, key) => (
        <Panel
          onPress={() =>
            navigation.navigate('more-info', {
              note: quest.note,
              link: quest.link,
              linkTitle: quest.linkTitle,
              title: quest.type,
            })
          }
          title={quest.type}
          key={key}
          id={quest.id}
        />
      ))}
    </ScrollView>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 10,
  },
});

export default SearchResult;
