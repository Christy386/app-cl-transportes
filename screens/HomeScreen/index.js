import { StyleSheet, Text, View, Button } from 'react-native';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../components/iconButton';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>:3</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <IconButton Icon = {MCIcons} text="Comprar passagem" navigateTo="BuyTicket" navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
