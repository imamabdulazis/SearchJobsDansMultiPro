import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  Switch,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const FilterBar = ({
  onPress,
  onChangeLocation,
  location,
  isFullTime,
  onChangeFullTime,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.rowBeetwen}>
        <Text>Fultime</Text>
        <Switch value={isFullTime} onValueChange={onChangeFullTime} />
      </View>
      <View style={styles.spacer} />
      <View style={styles.rowBeetwen}>
        <Text>Location</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={onChangeLocation}
        />
      </View>
      <View style={styles.spacer} />
      <View style={styles.rowRererse}>
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Text>Apply filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 15,
    padding: 10,
  },
  spacer: {
    marginVertical: 5,
  },
  rowBeetwen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowRererse: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: width / 1.5,
    color: 'black',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 2,
  },
  button: {
    backgroundColor: '#DEDEDE',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 5,
  },
});
