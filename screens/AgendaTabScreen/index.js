import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { useState } from 'react';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeIcons from 'react-native-vector-icons/Feather';

import agendaData from './agendaData';

export default function AgendaScreen({ navigation }) {

  [day, setDay] = useState(30);
  [month, setMonth] = useState(10);
  [year, setYear] = useState(2024);

  console.log(agendaData);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => console.log('apertou')}>
            <Text style={styles.arrow}>
              {'<'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.date}>
            {day}/{month}/{year}
          </Text>
          <TouchableOpacity onPress={() => console.log('apertou')}>
            <Text style={styles.arrow}>
              {'>'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockContainer}>
          <Text style={styles.tittle25}>
            Ida
          </Text>
          {agendaData.map((cityData, i) => {
            return(
              <View style={styles.papper} key={{i}}>
                <Text style={styles.tittle25}>
                  {cityData.city}
                </Text>
                {cityData.tickets.map((ticketData, j) => {
                  return(
                    <View style={styles.ticketContainer} key={{j}}>
                      <View style={styles.infoContainer}>
                        <Text style={styles.tittle20}>
                          {ticketData.name}
                        </Text>
                        <Text style={styles.content}>
                          {ticketData.address}
                        </Text>
                      </View>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                          style={styles.icon}
                          onPress={() => console.log(ticketData.cellphoneNumber)}
                        >
                          <MCIcons name={'android-messages'} size={30} color="#9e9e9e" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.icon}
                          onPress={() => console.log(ticketData.cellphoneNumber)}
                        >
                          <FeIcons name={'phone-call'} size={25} color="#9e9e9e" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })}
              </View>
            )
          })}

          <Text style={styles.tittle25}>
            Volta
          </Text>
          {agendaData.map((cityData, i) => {
            return(
              <View style={styles.papper} key={{i}}>
                <Text style={styles.tittle25}>
                  {cityData.city}
                </Text>
                {cityData.tickets.map((ticketData, j) => {
                  return(
                    <View style={styles.ticketContainer} key={{j}}>
                      <View style={styles.infoContainer}>
                        <Text style={styles.tittle20}>
                          {ticketData.name}
                        </Text>
                        <Text style={styles.content}>
                          {ticketData.address}
                        </Text>
                      </View>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                          style={styles.icon}
                          onPress={() => console.log(ticketData.cellphoneNumber)}
                        >
                          <MCIcons name={'android-messages'} size={30} color="#9e9e9e" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.icon}
                          onPress={() => console.log(ticketData.cellphoneNumber)}
                        >
                          <FeIcons name={'phone-call'} size={25} color="#9e9e9e" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })}
              </View>
            )
          })}
        </View>  
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  dateContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10
  },
  blockContainer: {
    flexDirection: 'column',
    width: '90%',
  },
  papper: {
    flexDirection: 'column',
    width: '100%',
    borderWidth: 1,
    borderColor: '#9e9e9e',
    borderRadius: 6,
    padding: 10,
    marginTop: 10
  },
  ticketContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  infoContainer: {
    flexDirection: 'column',
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '20%',
  },
  date: {
    fontSize: 20,
    color: '#444',
  },
  arrow: {
    fontSize: 35,
    marginHorizontal: 8,
    padding: 3,
    color: '#444',
  },
  icon: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle25: {
    fontSize: 25,
    color: '#444',
    fontWeight: '600',
    marginTop: 10,
  },
  tittle20: {
    fontSize: 20,
    color: '#444',
  },
  content: {
    fontSize: 17,
    color: '#444',
  }
});
