import { StyleSheet, Text, View, Button } from 'react-native';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../components/iconButton';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <IconButton 
        Icon = {MCIcons} 
        text="Comprar passagem" 
        navigateTo="BuyTicket" 
        navigation={navigation}
      />
      <IconButton 
        Icon = {MCIcons} 
        text="Comprar passagem" 
        navigateTo="BuyTicket" 
        navigation={navigation}
      />
      <IconButton 
        Icon = {MCIcons} 
        text="Comprar passagem" 
        navigateTo="BuyTicket" 
        navigation={navigation}
      />
      <IconButton 
        Icon = {MCIcons} 
        text="Comprar passagem" 
        navigateTo="BuyTicket" 
        navigation={navigation}
      />
      <IconButton 
        Icon = {MCIcons} 
        text="Comprar passagem" 
        navigateTo="BuyTicket" 
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
