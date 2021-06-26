import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BaseUrl } from './utlis/base_url';
import SearchBar from './SearchBar';

const JobsScreen = props => {
  const [search, setSearch] = useState(null);
  const [location, setLocation] = useState(null);
  const [isFullTime, setIsFullTime] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  ///fetch jobs from api
  const fetchJobs = (search, location, fulltime) => {
    fetch(
      // `${BaseUrl}/positions.json?desciption=${search}&location=${location}&fulltime=${isFullTime}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchJobs();
    console.log(search);
  }, [search]);

  return (
    <View style={styles.container}>
      <SearchBar onChangeText={setSearch} placeholder="Search" />
    </View>
  );
};

export default JobsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
