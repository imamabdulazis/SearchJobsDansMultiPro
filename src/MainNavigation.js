import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobsScreen from './JobsScreen';
import JobsDetail from './JobsDetail';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
