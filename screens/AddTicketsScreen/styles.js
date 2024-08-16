import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    label: {
      fontSize: 18,
      marginVertical: 10,
    },
    inputContainer: {
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 15,
    },
    inputContainerSmall: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 8,
      marginLeft: 10,
    },
    picker: {
      height: 50,
      width: '100%',
    },
    dateContainer: {
      flexDirection: 'column',
    },
    datePicker: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 8,
      marginHorizontal: 5,
    },
    datePickerItem: {
      height: 50,
      width: '100%',
    },
    finishContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 20,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderColor: '#ccc',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    },
    totalContainer: {
      marginBottom: 20,
    },
    totalLabel: {
      fontSize: 23,
      fontWeight: 'bold',
    },
    total: {
      fontSize: 23,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 8,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
    },
    addressBlock: {
      borderWidth: 2,
      borderRadius: 8,
      borderColor: '#ccc',
      padding: 10
    }
  });