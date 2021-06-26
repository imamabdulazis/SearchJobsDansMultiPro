/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const JobsDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState({});

  const fetchJobsDetail = () => {
    var url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;
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
    fetchJobsDetail();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Company</Text>
          <View style={styles.spacerSmall} />
          <View style={styles.headerCard}>
            <Image source={{ uri: data.avatar }} style={styles.companyLogo} />
            <View style={styles.contentHeader}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.jobs}>{data.title}</Text>
              <Text style={styles.url}>{data.url}</Text>
            </View>
          </View>
        </View>
        <View style={styles.spacer} />
        <Text style={styles.title}>Job Specification</Text>
        <View style={styles.spacerSmall} />
        <View style={styles.contentCard}>
          <Text style={styles.titleSpesification}>Title</Text>
          <Text>{data.jobsTitle}</Text>
          <Text style={styles.titleSpesification}>Fulltime</Text>
          <Text>{data.type === 'Full Time' ? 'Yes' : 'No'}</Text>
          <Text style={styles.titleSpesification}>Description</Text>
          <Text>{data.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    padding: 15,
  },
  spacer: {
    margin: 10,
  },
  spacerSmall: {
    margin: 5,
  },
  companyLogo: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  titleSpesification: {
    color: 'grey',
    fontSize: 12,
    fontWeight: '800',
  },
  jobs: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  url: {
    fontSize: 12,
    fontWeight: '700',
  },
  headerCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentHeader: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: width / 1.5,
  },
  contentCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'column',
  },
});
