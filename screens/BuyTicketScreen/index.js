import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

const cities = ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macau"];

export default function BuyTicketScreen() {
  const anoAtual = new Date().getFullYear();
  const ano = Array.from({ length: 7 }, (_, i) => anoAtual + i);
  const [cidadePartida, setCidadePartida] = useState('');
  const [cidadeChegada, setCidadeChegada] = useState('');
  const [data, setData] = useState('');
  const [numeroPassagens, setNumeroPassagens] = useState(1);
  const [total, setTotal] = useState(70);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cidade de partida</Text>
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

      <Text style={styles.label}>Cidade de chegada</Text>
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

      <Text style={styles.label}>Data</Text>
      <View style={styles.dateContainer}>
        <View style={styles.datePicker}>
          <Picker
            selectedValue={data}
            onValueChange={(itemValue) => setData(itemValue)}
            style={styles.datePickerItem}
          >
            <Picker.Item label="Dia" value="" />
            {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
              <Picker.Item key={num} label={num.toString()} value={num} />
            ))}
          </Picker>
        </View>
        <View style={styles.datePicker}>
          <Picker
            selectedValue={data}
            onValueChange={(itemValue) => setData(itemValue)}
            style={styles.datePickerItem}
          >
            <Picker.Item label="Mês" value="" />
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <Picker.Item key={num} label={num.toString()} value={num} />
            ))}
          </Picker>
        </View>
        <View style={styles.datePicker}>
          <Picker
            selectedValue={data}
            onValueChange={(itemValue) => setData(itemValue)}
            style={styles.datePickerItem}
          >
            <Picker.Item label="Ano" value="" />
            {ano.map((year) => (
              <Picker.Item key={year} label={year.toString()} value={year} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.finishContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Número de passagens</Text>
          <View style={styles.inputContainerSmall}>
            <Picker
              selectedValue={numeroPassagens}
              onValueChange={(itemValue) => setNumeroPassagens(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <Picker.Item key={num} label={num.toString()} value={num} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={[styles.row, styles.totalContainer]}>
          <Text style={styles.totalLabel}>Total: </Text>
          <Text style={styles.total}>R$ {total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}