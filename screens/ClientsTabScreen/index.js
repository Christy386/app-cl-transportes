import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MIIcons from 'react-native-vector-icons/MaterialIcons';
import FeIcons from 'react-native-vector-icons/Feather';

export default function AgendaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.screenContainer}
        onPress={() => navigation.navigate('AddTickets')}
        >
        <Text style={styles.screenText}>
          Adicionar passagens
        </Text>
        <MCIcons name={'ticket-confirmation-outline'} size={30} color="#9e9e9e" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.screenContainer}
        onPress={() => navigation.navigate('AddClients')}
      >
        <Text style={styles.screenText}>
          Adicionar clientes
        </Text>
        <MIIcons name={'person-add-alt'} size={30} color="#9e9e9e" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.screenContainer}
        onPress={() => navigation.navigate('ClientsList')}
      >
        <Text style={styles.screenText}>
          Lista de clientes
        </Text>
        <MIIcons name={'person-outline'} size={30} color="#9e9e9e" />
      </TouchableOpacity>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  screenContainer: {
    width: '90%',
    padding: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    marginTop: 10,
  },
  screenText: {
    fontSize: 16,
    color: '#444'
  }
});
