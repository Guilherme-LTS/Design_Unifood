import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const EsqueciSenha = () => {
  const [password, setPassword] = useState('');

  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Esqueceu sua senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a nova senha"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Redefinir senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: -80,
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
};

export default EsqueciSenha;
