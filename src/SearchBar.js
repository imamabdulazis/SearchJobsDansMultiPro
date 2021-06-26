import React from 'react';
import { TextInput } from 'react-native';

function SearchBar({ onChangeText, placeholder }) {
  return <TextInput onChangeText={onChangeText} placeholder={placeholder} />;
}

export default SearchBar;
