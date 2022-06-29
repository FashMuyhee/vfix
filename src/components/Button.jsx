import {View, Text, TextInput as RNInput, Pressable} from 'react-native';
import React from 'react';

const Button = ({title, onPress, disabled, isLoading}) => {
  return (
    <Pressable disabled={disabled || isLoading} onPress={onPress} style={{alignItems: 'center', justifyContent: 'center', height: 50, paddingHorizontal: 10, borderRadius: 5, marginTop: 10, backgroundColor: '#E5D80D'}}>
      <Text style={{fontSize: 18, textAlign: 'center', color: 'black'}}>{isLoading ? 'Loading...' : title}</Text>
    </Pressable>
  );
};

export default Button;
