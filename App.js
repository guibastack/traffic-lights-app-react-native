import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailScreen from './src/Screens/EmailScreen';
import AuthTokenScreen from './src/Screens/AuthTokenScreen';
import ChangeNameScreen from './src/Screens/ChangeNameScreen';
import NearbyTrafficLightsScreen from './src/Screens/NearbyTrafficLightsScreen';
import MapTrafficLightsScreen from './src/Screens/MapTrafficLightsScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
import * as Styles from './src/Styles/Styles';

const Stack = createNativeStackNavigator();

export default () => {
  
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="EmailScreen" screenOptions={{
        headerTitleStyle: Styles.headerTitleStyle,
        headerShadowVisible: Styles.headerShadowVisible,
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
