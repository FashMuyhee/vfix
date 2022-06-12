import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Panel = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={{width: 15, height: 15, backgroundColor: '#3957ED', borderRadius: 20, marginRight: 10}} />
          <Text onPress={props.onPress} style={{fontWeight: 'bold'}}>
            {props.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowRadius: 3,
    marginTop: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    padding: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
  body: {
    padding: 10,
    paddingTop: 0,
    // paddingBottom: 5,
  },
});

export default Panel;
