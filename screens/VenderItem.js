import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

const VenderItem = () => {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productImage, setProductImage] = useState('')
  
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Vender Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        onChangeText={text => setProductName(text)}
        value={productName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        onChangeText={text => setProductPrice(text)}
        value={productPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        onChangeText={text => setProductDescription(text)}
        value={productDescription}
        multiline={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Image URL"
        onChangeText={text => setProductImage(text)}
        value={productImage}
      />
      <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
        <Text style={styles.submitButtonText}>Vender</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  headerText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10
  },
  submitButton: {
    backgroundColor: 'blue',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18
  }
})

export default VenderItem
