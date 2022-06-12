import {View, Text, StyleSheet, ScrollView, Linking, Pressable} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import content from '../sample-data/contents';
import {useState} from 'react';

const Details = ({route, navigation}) => {
  const [quest, setQuest] = useState([]);

  const handleOpenLink = url => {
    Linking.openURL(url);
  };

  useEffect(() => {
    setQuest(
      content.filter((quest, index) => {
        if (quest.id == route.params.id) {
          return quest.steps;
        }
      }),
    );
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{paddingHorizontal: 10, marginTop: 20}}>
        <Text style={{fontSize: 14, lineHeight: 20,wordSpacing:10}}>{route.params.note}</Text>
        <Text onPress={() => handleOpenLink(route.params?.link)} style={{color: '#505be4', marginTop: 10}}>
          {route.params?.linkTitle}
        </Text>
      </View>
      <Pressable
        style={{borderColor: '#505be4', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20, width: '60%', color: 'white', borderRadius: 10, height: 50, alignSelf: 'center'}}
        onPress={() => navigation.navigate('mechanic-list')}>
        <Text style={{textAlign: 'center', color: '#505be4', fontSize: 13}}>Contact Mechanic for more Support</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  step: {
    paddingRight: 8,
  },
  body: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
