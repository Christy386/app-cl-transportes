import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 40,
      alignItems: 'center',
      justifyContent:  'space-between',
    },
    logoContainer: {
      alignItems: 'center',
      paddingBottom: 20,
    },
    inputContainer: {
      position: 'relative',
    },
    icon: {
      position: 'absolute',
      right: 12,
      top: 8,
    },
    logo:{
      width: 144,
      height:144,
    },
    input: {
      height: 40,
      borderColor: '#9e9e9e',
      borderWidth: 1,
      borderRadius: 4,
      outlineColor: '#9e9e9e',
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    checkboxText: {
      marginLeft: 10,
      fontSize: 16,
    },
    loginButton: {
      backgroundColor: '#1554f6',
      color: '#fff',
      height: 48,
      width: '100%',
      borderRadius: 4,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems:'center',
    },
    FormContainer: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      maxWidth: 375,
    },
    registerText: {
      textAlign: 'center',
      fontSize: 18,
    },
  });