import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'

const Vendedor = () => {
  const [sellerName, setSellerName] = useState('')
  const [sellerEmail, setSellerEmail] = useState('')
  const [sellerPhone, setSellerPhone] = useState('')
  const [sellerShopName, setShopName] = useState('')


  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <Image 
      source={require('../assets/logo.png')} 
      style={styles.logo}
      />

      <Text style={styles.headerText}>Informações do vendedor</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={sellerName}
        onChangeText={text => setSellerName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome da Loja"
        value={sellerShopName}
        onChangeText={text => setShopName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={sellerEmail}
        onChangeText={text => setSellerEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={sellerPhone}
        onChangeText={text => setSellerPhone(text)}
      />
      <TouchableOpacity 
        style={styles.submitButton}
        onPress={()=>navigation.navigate("TelaVendedor")}>
        <Text style={styles.submitButtonText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  headerText: {
    fontSize: 20,
    marginTop: 0,
    marginBottom: 20
  },
  logo: {
    width: 150,
    height: 300,
    resizeMode: 'contain',
    marginBottom: -80,
    marginTop: -60,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  submitButton: {
    width: '80%',
    backgroundColor: 'blue',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  submitButtonText: {
    color: 'white'
  }
})

export default Vendedor
