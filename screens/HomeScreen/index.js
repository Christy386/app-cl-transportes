import { StyleSheet, View } from 'react-native';
import IconButton from '../../components/iconButton';
import homeClientData from './homeClientData';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bContainer}>
        {homeClientData.map((buttonData, i) => (
          <IconButton 
            key={i}
            Icon={buttonData.Icon}
            text={buttonData.text}
            navigateTo={buttonData.navigateTo}
            navigation={navigation}
            style={styles.iconButton} // Apply the custom style
          />
        ))}
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
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconButton: {
    width: '30%',
    aspectRatio: 1,
    margin: 10,
  },
});
