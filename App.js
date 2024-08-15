import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoIcons from 'react-native-vector-icons/Ionicons';
import FA5Icons from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './screens/HomeScreen'
import AdminScreen from './screens/AdminScreen'

import ClientsTabScreen from './screens/ClientsTabScreen'
import AgendaTabScreen from './screens/AgendaTabScreen';
import PackageTabScreen from './screens/PackageTabScreen'

import DetailsScreen from './screens/DetailsScreen';
import BuyTicketScreen from './screens/BuyTicketScreen';
import LoginScreen from './screens/LoginScreen';
import TicketsScreen from './screens/MyTicketsScreen';
import AddClientsScreen from './screens/AddClientsScreen';
import ClientsListScreen from './screens/ClientsListScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AgendaStack = createNativeStackNavigator();
const ClientStack = createNativeStackNavigator();
const PackageStack = createNativeStackNavigator();

function AgendaStackScreen() {
  return (
    <AgendaStack.Navigator>
      <AgendaStack.Screen name="AgendaTab" component={AgendaTabScreen} />
    </AgendaStack.Navigator>
  );
}

function ClientsStackScreen() {
  return (
    <ClientStack.Navigator>
      <ClientStack.Screen name="ClientsTab" component={ClientsTabScreen} />
      <ClientStack.Screen name="AddClients" component={AddClientsScreen} />
      <ClientStack.Screen name="ClientsList" component={ClientsListScreen} />
      <ClientStack.Screen name="Tickets" component={TicketsScreen} />
    </ClientStack.Navigator>
  );
}

function PackageStackScreen() {
  return (
    <PackageStack.Navigator>
      <PackageStack.Screen name="PackagesTab" component={PackageTabScreen} />
    </PackageStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        headerShown: false
      }}>
        <Tab.Screen 
          name="Agenda" 
          component={AgendaStackScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MCIcons name="format-list-bulleted" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Clientes" 
          component={ClientsStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IoIcons name="person-sharp" color={color} size={size} />
            ),
          }}  
        />
        <Tab.Screen 
          name="Encomendas" 
          component={PackageStackScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FA5Icons name="boxes" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
