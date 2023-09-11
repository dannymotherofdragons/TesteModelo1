import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {

  const LoginPress = () => {
    // Navega para o ecrã de postos de carregamento
    navigation.navigate('PostosCarregamento');
  };

  return (
    <View style={styles.container}>
    {/* Campo de Email */}
    <TextInput
      style={styles.input}
      placeholder="Digite seu email"
      autoCompleteType="email"
      keyboardType="email-address"
    />

    {/* Campo de Senha */}
    <TextInput
      style={styles.input}
      placeholder="Digite sua senha"
      autoCompleteType="password"
      secureTextEntry={true} // Para ocultar a senha
      keyboardType="default" // Use "default" para senhas
    />

    {/* Botão de Login */}
    <TouchableOpacity style={styles.button} onPress={LoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
  </View>
  
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16, // Padding superior de 16
    paddingHorizontal: 8, // Margem horizontal de 8
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#F50057',
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});


export default HomeScreen;