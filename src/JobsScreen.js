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
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import FilterBar from './components/FilterBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';

const { width, height } = Dimensions.get('screen');

const JobsScreen = props => {
  ///search jobs
  const [search, setSearch] = useState('');

  const [page, setPage] = useState(1);

  ///filter location
  const [location, setLocation] = useState('');

  ///filter fultime
  const [isFullTime, setIsFullTime] = useState(false);

  ///toggle filter
  const [isFilter, setIsFilter] = useState(false);

  const [data, setData] = useState([]);

  const [refresh, setRefresh] = useState(false);

  ///fetch jobs from api
  const fetchJobs = () => {
    var url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?desciption=${search}&location=${location}&fulltime=${isFullTime}&page=${page}`;
    console.log(`IMUNNN :${url}`);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        setRefresh(false);
        setData(json);
      })
      .catch(err => {
        console.log(err);
        setRefresh(false);
      });
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetchJobs();
  }, [search]);

  useEffect(() => {
    fetchJobs();
  }, [page, isFullTime]);

  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };

  const onApplyFilter = () => {
    setRefresh(true);
    toggleFilter();
    fetchJobs();
  };

  const onRefresh = () => {
    setRefresh(true);
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

  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator color={'black'} />
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
        />
        <TouchableOpacity style={{}} onPress={toggleFilter}>
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
      {refresh ? (
        <ActivityIndicator color={'black'} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={refresh} />
          }
          keyExtractor={item => item?.id}
          scrollEnabled={true}
          ListEmptyComponent={emptyPlaceHolder}
          onEndReachedThreshold={0}
          onEndReached={onLoadMore}
          ListFooterComponent={renderFooter}
        />
      )}
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
    borderWidth: 1,
    borderColor: 'black',
    padding: 0,
    borderRadius: 50,
    height: 40,
    borderBottomWidth: 1,
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
