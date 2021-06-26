/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import FilterBar from './components/FilterBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';

const { width, height } = Dimensions.get('screen');

const JobsScreen = props => {
  ///search jobs
  const [search, setSearch] = useState('');

  ///filter location
  const [location, setLocation] = useState('');

  ///filter fultime
  const [isFullTime, setIsFullTime] = useState(false);

  ///toggle filter
  const [isFilter, setIsFilter] = useState(false);

  const [data, setData] = useState([]);

  ///fetch jobs from api
  const fetchJobs = () => {
    var url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?desciption=${search}&location=${location}&fulltime=${isFullTime}`;
    console.log(`BASE URL :${url}`);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, [search]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };

  const onApplyFilter = () => {
    toggleFilter();
    fetchJobs();
  };

  const onDetailItem = item => {
    props.navigation.navigate('DetailJobs', {
      id: item.id,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => onDetailItem(item)}>
      <Image
        style={styles.avatar}
        source={{
          uri: item.company_logo,
        }}
      />
      <View style={styles.content}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.jobs}>
          {item.company}
        </Text>
        <Text numberOfLines={1} style={styles.location}>
          {item.location}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const emptyPlaceHolder = () => {
    return (
      <View View style={styles.emptyPaceholder}>
        <Text>Jobs tidak di temukan!</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.rowHeader }}>
        <SearchBar
          placeholder="search"
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchBarContainer}
          inputStyle={{}}
        />
        <TouchableOpacity style={{ padding: 5 }} onPress={toggleFilter}>
          <MaterialIcons name={'keyboard-arrow-down'} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      {isFilter && (
        <FilterBar
          onPress={onApplyFilter}
          onChangeLocation={setLocation}
          location={location}
          isFullTime={isFullTime}
          onChangeFullTime={setIsFullTime}
        />
      )}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        style={{ flexGrow: 1 }}
        ListEmptyComponent={emptyPlaceHolder}
      />
    </View>
  );
};

export default JobsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarContainer: {
    backgroundColor: '#FFFF',
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#FFFF',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  avatar: {
    width: 70,
    height: 70,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 5,
  },
  content: {
    marginHorizontal: 10,
    width: width - 150,
  },
  title: {
    fontSize: 15,
    fontWeight: '900',
    overflow: 'hidden',
  },
  emptyPaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobs: {
    fontSize: 15,
    fontWeight: '900',
    color: 'grey',
  },
  location: {
    fontSize: 15,
    fontWeight: '900',
    color: 'grey',
  },
});

const DATA = [
  {
    id: '32bf67e5-4971-47ce-985c-44b6b3860cdb',
    type: 'Full Time',
    url: 'https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb',
    created_at: 'Wed May 19 00:49:17 UTC 2021',
    company: 'SweetRush',
    company_url: 'https://www.sweetrush.com/',
    location: 'Remote',
    title: 'Senior Creative Front End Web Developer',
    description: 'description',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--82886ff47e94ff4c0255b95773a9667644768b2b/SR%20Logo.png',
  },
  {
    id: '32bf67e5-4971-47ce-985c-44b6b3860sdf',
    type: 'Full Time',
    url: 'https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb',
    created_at: 'Wed May 19 00:49:17 UTC 2021',
    company: 'SweetRush',
    company_url: 'https://www.sweetrush.com/',
    location: 'Remote',
    title: 'Senior Creative Front End Web Developer',
    description: 'description',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--82886ff47e94ff4c0255b95773a9667644768b2b/SR%20Logo.png',
  },
];
