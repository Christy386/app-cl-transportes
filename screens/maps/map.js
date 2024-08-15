import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

export default function MapScreen() {
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Permissão para acessar a localização foi negada');
        return;
      }
    })();
  }, []);

  const handleUseCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setMarkerPosition({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude:  -5.79448,
          longitude: -35.211,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={markerPosition ? {
          ...markerPosition,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        } : null}
        onPress={(e) => setMarkerPosition(e.nativeEvent.coordinate)}
      >
        {markerPosition && <Marker coordinate={markerPosition} />}
      </MapView>

      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Pesquisar Endereço"
          onPress={(data, details = null) => {
            const location = details.geometry.location;
            setMarkerPosition({
              latitude: location.lat,
              longitude: location.lng,
            });
          }}
          query={{
            key: 'AIzaSyASFXaSpQ29iGD_P3UkfFiSeu8WvILXLnE',
            language: 'pt',
          }}
          styles={{
            textInputContainer: styles.textInputContainer,
            textInput: styles.textInput,
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          fetchDetails={true}
        />

        <TouchableOpacity style={styles.locationButton} onPress={handleUseCurrentLocation}>
          <Ionicons name="locate" size={24} color="#9e9e9e" />
          <Text style={styles.locationButtonText}>Usar localização atual</Text>
        </TouchableOpacity>

        <View style={styles.selectButton}>
          <Button title="Selecionar" onPress={() => {
          }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  textInputContainer: {
    backgroundColor: '#9e9e9ee',
    borderRadius: 5,
    height: 46,
    borderWidth: 2,
    borderColor: '#9e9e9e',
    marginBottom: 10,
  },
  textInput: {
    height: 46,
    fontSize: 16,
    paddingLeft: 10,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    height: 46,
    padding: 8,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#9e9e9e',
  },
  locationButtonText: {
    marginLeft: 8,
    color: '#9e9e9e',
  },
  selectButton: {
    marginTop: 10,
  },
});
