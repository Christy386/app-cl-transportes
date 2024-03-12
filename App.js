//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen';
import BuyTicketScreen from './screens/BuyTicketScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="BuyTicket" component={BuyTicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
