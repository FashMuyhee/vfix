import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Select = ({selected, label, onChange}) => {
  return (
    <Pressable onPress={() => onChange(!selected)}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>{label}</Text>
        <View style={styles.selectContainer}>{selected && <View style={styles.selected} />}</View>
      </View>
    </Pressable>
  );
};

const RadioBtn = ({status, onChange}) => {
  return (
    <View style={styles.wrapper}>
      <Select selected={status === 'Yes'} label="Yes" onChange={onChange} />
      <Select selected={status === 'No'} label="No" onChange={onChange} />
    </View>
  );
};

export default RadioBtn;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 130,
    height: 40,
    justifyContent: 'space-between',
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: '#e5d80d',
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  selected: {
    width: 22,
    height: 22,
    borderRadius: 20,
    backgroundColor: '#e5d80d',
  },
});
