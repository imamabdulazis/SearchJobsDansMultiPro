import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const LoginScreen = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const onLogin = () => {
    if (username === 'user' && password === 'pass') {
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://dansmultipro.com/wp-content/uploads/2020/03/logo_web_header-810x180-1.png',
        }}
      />
      <TextInput
        placeholder="username"
        onChangeText={setUsername}
        keyboardType="default"
      />
      <TextInput
        placeholder="username"
        onChangeText={setUsername}
        keyboardType="default"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {},
  titleHeader: {},
  input: {},
  button: {
    borderRadius: 10,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleButton: {
    fontSize: 12,
    fontWeight: '800',
  },
});
