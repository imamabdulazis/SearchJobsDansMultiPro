/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobsScreen from './JobsScreen';
import JobsDetail from './JobsDetail';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from './redux/actions/auth_action';

const Stack = createStackNavigator();

function MainNavigation() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen
              name="Home"
              component={JobsScreen}
              options={{
                title: 'Jobs List',
              }}
            />
            <Stack.Screen
              name="DetailJobs"
              component={JobsDetail}
              options={{
                title: 'Jobs Detail',
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
