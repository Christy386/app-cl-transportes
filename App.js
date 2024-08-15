import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import AdminScreen from './screens/AdminScreen'
import DetailsScreen from './screens/DetailsScreen';
import BuyTicketScreen from './screens/BuyTicketScreen';
import LoginScreen from './screens/LoginScreen';
import MyTicketsScreen from './screens/MyTicketsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Admin" component={AdminScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="BuyTicket" component={BuyTicketScreen} />
        <Stack.Screen name="MyTickets" component={MyTicketsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
