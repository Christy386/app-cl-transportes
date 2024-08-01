import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import TravelCard from '../../components/ticketContainer';
import trips from './ticketsData'

export default function MySchedule({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trips.map((trip) => (
        <TravelCard
          key={trip.id}
          fromCity={trip.fromCity}
          toCity={trip.toCity}
          date={trip.date}
          price={trip.price}
          icon={trip.icon}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  tripItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tripInfo: {
    flex: 1,
  },
  tripText: {
    fontSize: 16,
    marginBottom: 4,
  },
});