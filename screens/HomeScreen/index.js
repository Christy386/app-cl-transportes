import { StyleSheet, Text, View, Button } from 'react-native';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from '../../components/iconButton';
import homeClientData from './homeClientData';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bContainer}>
        {homeClientData.map((buttonData, i)=> {
          //console.log(buttonData);
          return(
            <IconButton 
            key={i}
            IconFamily={buttonData.Icon}
            IconName={buttonData.IconName}
            text={buttonData.text}
            navigateTo={buttonData.navigateTo}
            navigation={navigation}
            />
          )
        })}
      </View>
      
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
  bContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
