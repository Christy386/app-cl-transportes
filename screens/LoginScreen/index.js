import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, CheckBox, Text, Image, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../../assets/Logo.svg";
import { styles } from './Styles';

export default function LoginScreen({ navigation }) {
  const [showIcon, setShowIcon] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [iconAnimation] = useState(new Animated.Value(0));

  const handleLogin = () => {
    if (username === 'client' && password === 'client'){
      navigation.navigate('Home');
    } else if(username === 'admin' && password === 'admin'){
      //navigation.navigate('Admin');
    } else {
      return;
    }
    console.log('Remember Me:', rememberMe);
  };

  const handleRegister = ()=>{
    console.log("Registrar");
    //navigation.navigate('Register');
  };

  const handleInputFocus = () => {
    setShowIcon(true);
    startIconAnimation();
  };

  const handleInputBlur = () => {
    if (!username) {
      setShowIcon(false);
    }
  };

  const handleInputChange = (text) => {
    setUsername(text);
  };

  const startIconAnimation = () => {
    Animated.timing(iconAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.FormContainer}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder={showIcon ? "" : "Username"} value={username} onChangeText={handleInputChange} style={styles.input} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
          {showIcon && (
            <Animated.View style={[styles.icon, { opacity: iconAnimation, transform: [{ translateX: iconAnimation.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }] }]}>
              <FontAwesome name="user-circle" size={24} color="#9e9e9e" />
            </Animated.View>
          )}
        </View>
        <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} style={styles.input} />
        <View style={styles.checkboxContainer}>
          <CheckBox value={rememberMe} onValueChange={setRememberMe} tintColor="red"/>
          <Text style={styles.checkboxText}>Keep me logged in</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize:18, }}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>No account yet? <Text onPress={handleRegister} style={{color:"#00f", }}>Register here.</Text></Text>
    </View>
  );
}
