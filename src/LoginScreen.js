/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { authAction } from './redux/actions/auth_action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('screen');

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const isLoading = useSelector(state => state.auth.isLoading);
  const message = useSelector(state => state.auth.message);

  const onLogin = () => {
    dispatch(authAction(username, password));
  };

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  return (
    <View style={styles.container}>
      <View style={styles.spacer}>
        <Image
          source={{
            uri: 'https://dansmultipro.com/wp-content/uploads/2020/03/logo_web_header-810x180-1.png',
          }}
          style={styles.logo}
        />
      </View>
      <Text>username: user</Text>
      <Text>password: pass</Text>
      <View style={styles.smallSpacer} />
      <TextInput
        style={styles.input}
        value={username}
        autoFocus={true}
        placeholder="Username"
        onChangeText={setUsername}
      />
      <View style={styles.smallSpacer} />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        keyboardType="default"
        secureTextEntry
      />
      <View style={styles.smallSpacer} />
      <Text>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        {isLoading ? (
          <ActivityIndicator color={'#FFFFF'} />
        ) : (
          <Text style={styles.titleButton}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    alignItems: 'center',
  },
  spacer: {
    margin: 20,
    padding: 20,
  },
  smallSpacer: {
    margin: 5,
  },
  logo: {
    width: width / 1.2,
    height: width / 6,
  },
  titleHeader: {},
  input: {
    width: width - 20,
    borderRadius: 30,
    backgroundColor: '#FFFF',
    padding: 10,
  },
  button: {
    width: width - 20,
    borderRadius: 30,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBA834',
    padding: 10,
  },
  titleButton: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFF',
  },
  containerLoader: {
    flex: 1,
    backgroundColor: '#0000',
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
