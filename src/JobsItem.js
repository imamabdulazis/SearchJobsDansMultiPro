import React from 'react';
import { StyleSheet, View } from 'react-native';

const JobsItem = ({ avatar, content, trailing }) => {
  return (
    <View style={styles.card}>
      <View style={styles.lefAvatar}>{avatar}</View>
      <View style={styles.content}>{content}</View>
      <View style={styles.trailing}>{trailing}</View>
    </View>
  );
};

export default JobsItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lefAvatar: {
    width: 150,
    height: 150,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  trailing: {},
});
