import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailScreen from './src/Screens/EmailScreen';
import AuthTokenScreen from './src/Screens/AuthTokenScreen';
import ChangeNameScreen from './src/Screens/ChangeNameScreen';
import NearbyTrafficLightsScreen from './src/Screens/NearbyTrafficLightsScreen';
import MapTrafficLightsScreen from './src/Screens/MapTrafficLightsScreen';
import SettingsScreen from './src/Screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default () => {
  
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="EmailScreen" screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 17,
        },
        headerShadowVisible: false,
      }}>

        <Stack.Screen name="EmailScreen" component={EmailScreen} options={{
          title: 'Sign In',
        }}></Stack.Screen>
        
        <Stack.Screen name="AuthTokenScreen" component={AuthTokenScreen} options={{
          title: 'Sign In',
        }}></Stack.Screen>
        
        <Stack.Screen name="ChangeNameScreen" component={ChangeNameScreen} options={{
          title: 'Your name'
        }}></Stack.Screen>

        <Stack.Screen name="NearbyTrafficLightsScreen" component={NearbyTrafficLightsScreen} options={{
          title: 'Nearby'
        }}></Stack.Screen>

        <Stack.Screen name="MapTrafficLightsScreen" component={MapTrafficLightsScreen} options={{
          title: 'Map'
        }}></Stack.Screen>

        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{
          title: 'Settings'
        }}></Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>

  );

}
