import { StyleSheet, Text, View, Button } from 'react-native';

export default function AgendaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Clients Tab Screen</Text>      
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
