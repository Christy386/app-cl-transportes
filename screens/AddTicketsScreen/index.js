import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

const cities = [
  "Currais Novos", 
  "São vicente", 
  "Florânia", 
  "Jucurutú",
  "Campo Grande",
  "Upanema", 
  "Mossoró"
];

export default function AddTicketsScreen() {
  const anoAtual = new Date().getFullYear();
  const ano = Array.from({ length: 7 }, (_, i) => anoAtual + i);
  const [cidadePartida, setCidadePartida] = useState('');
  const [cidadeChegada, setCidadeChegada] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [address, setAddress] = useState('')

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>
          Cidade de partida
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={cidadePartida}
            onValueChange={(itemValue) => setCidadePartida(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione a cidade" value="" />
            {cities.map((city) => (
              <Picker.Item key={city} label={city} value={city} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>
          Cidade de chegada
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={cidadeChegada}
            onValueChange={(itemValue) => setCidadeChegada(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione a cidade" value="" />
            {cities.map((city) => (
              <Picker.Item key={city} label={city} value={city} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>
          Endereço
        </Text>
        <TextInput
          style={styles.addressBlock}
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => setAddress(text)}
          value={address}
        />
        
        <Text style={styles.label}>
          Data
        </Text>
        <View style={styles.dateContainer}>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={cidadeChegada}
              onValueChange={(itemValue) => setCidadeChegada(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione o dia" value="" />
                {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                  <Picker.Item key={num} label={num.toString()} value={num} />
                ))}
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={month}
              onValueChange={(itemValue) => setMonth(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione o mês" value="" />
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <Picker.Item key={num} label={num.toString()} value={num} />
                ))}
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={year}
              onValueChange={(itemValue) => setYear(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione o ano" value="" />
              {ano.map((year) => (
                <Picker.Item key={year} label={year.toString()} value={year} />
              ))}
            </Picker>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.button}
        >
          <Text 
            style={styles.buttonText}
            onPress={() => console.log('apertei')}
          >
            Adicionar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
}