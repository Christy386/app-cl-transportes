import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function IconButton({IconFamily = MCIcons,IconName = "bag-carry-on", text, navigateTo, navigation}){
    return(
        <View style={{margin: 10}}>
            <TouchableHighlight
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate(navigateTo)}
            >
                <View style={styles.button}>
                    <IconFamily name={IconName} size={60} color="#9e9e9e" />
                    
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#f1f3f4',
        padding: 10,
        width: 100,
        height: 140,
    },
    text: {
        color: '#616263',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
  });