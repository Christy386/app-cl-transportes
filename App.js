import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen';
import BuyTicketScreen from './screens/BuyTicketScreen';
import LoginScreen from './screens/LoginScreen';
import MyTickets from './screens/MyTickets';
import MySchedule from './screens/Schedule';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Comprar passagem" component={BuyTicketScreen} />
        <Stack.Screen name="Minhas passagens" component={MyTickets} />
        <Stack.Screen name="Agenda" component={MySchedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
