/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Linking,
  ActivityIndicator,
} from 'react-native';
import HtmlView from 'react-native-htmlview';

const { width, height } = Dimensions.get('screen');

const JobsDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJobsDetail();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={'black'} />
        </View>
      ) : (
        <ScrollView>
          <View>
            <Text style={styles.title}>Company</Text>
            <View style={styles.spacerSmall} />
            <View style={styles.headerCard}>
              <Image
                source={{ uri: data.company_logo }}
                style={styles.companyLogo}
              />
              <View style={styles.contentHeader}>
                <Text style={styles.title}>{data.company}</Text>
                <Text style={styles.jobs}>{data.location}</Text>
                <Text
                  numberOfLines={1}
                  style={styles.url}
                  onPress={() => Linking.openURL(data.url)}
                >
                  Go to Website
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.spacer} />
          <Text style={styles.title}>Job Specification</Text>
          <View style={styles.spacerSmall} />
          <View style={styles.contentCard}>
            <Text style={styles.titleSpesification}>Title</Text>
            <Text>{data.title}</Text>
            <View style={styles.spacerSmall} />
            <Text style={styles.titleSpesification}>Fulltime</Text>
            <Text>{data.type === 'Full Time' ? 'Yes' : 'No'}</Text>
            <View style={styles.spacerSmall} />
            <Text style={styles.titleSpesification}>Description</Text>
            <HtmlView value={data.description} />
          </View>
        </ScrollView>
      )}
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'blue',
    textDecorationLine: 'underline',
  },
  headerCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  contentHeader: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: width / 1.5,
  },
  contentCard: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'column',
  },
});
