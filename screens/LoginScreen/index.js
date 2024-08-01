import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Animated } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FontAwesome } from '@expo/vector-icons';

import Logo from './../../assets/Logo.svg';
import { styles } from './Styles';

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
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

  const handleInputChange = (text) => {
    setUsername(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.FormContainer}>
        <View style={styles.logoContainer}>
          <Logo style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder={"Username"} 
            value={username} 
            onChangeText={handleInputChange} 
            style={styles.input} 
          />
          <FontAwesome style={styles.icon} name="user-circle" size={24} color="#9e9e9e" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Password" 
            secureTextEntry={!showPassword} 
            value={password} 
            onChangeText={setPassword} 
            style={[styles.input, { paddingRight: 40 }]} 
          />
          <TouchableOpacity 
            style={styles.eyeIcon} 
            onPress={() => setShowPassword(!showPassword)}
          >
            <FontAwesome 
              name={showPassword ? "eye" : "eye-slash"} 
              size={24} 
              color="#9e9e9e" 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox value={rememberMe} onValueChange={setRememberMe} tintColor="red"/>
          <Text style={styles.checkboxText}>Keep me logged in</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize:18, }}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        No account yet? 
        <Text onPress={handleRegister} style={{color:"#00f", }}> Register here.</Text>
      </Text>
    </View>
  );
}
