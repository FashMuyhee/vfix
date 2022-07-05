import {View, Text, TextInput as RNInput} from 'react-native';
import React from 'react';

const TextInput = ({value, onChange, keyboard, placeholder, ...rest}) => {
  return <RNInput {...rest} placeholderTextColor="#ccc" style={{borderWidth: 1, borderColor:'#f4f4f4', color: 'white', height: 50, paddingHorizontal: 10, borderRadius: 5, marginTop: 10, fontSize: 15}} placeholder={placeholder} value={value} onChangeText={onChange} keyboardType={keyboard} />;
};

export default TextInput;
