import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function IconButton({Icon, text, navigateTo, navigation}){
    return(
        <View>
            <TouchableHighlight
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate(navigateTo)}
            >
                <View style={styles.button}>
                    <Icon name={"bag-carry-on"} size={60} color="#9e9e9e" />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: '#f1f3f4',
        padding: 10,
    },
    text: {
        color: '#616263',
        fontWeight: 'bold'
    }
    
  });