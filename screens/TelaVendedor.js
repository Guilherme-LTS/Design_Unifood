import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const TelaVendedor = () => {
  const [sellerName, setSellerName] = useState('John Doe')
  const [sellerFunds, setSellerFunds] = useState(0)
  const [sellerItems, setSellerItems] = useState(0)

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Seller Profile</Text>
      <Text style={styles.text}>Name: {sellerName}</Text>
      <Text style={styles.text}>Funds: {sellerFunds}</Text>
      <Text style={styles.text}>Number of Items: {sellerItems}</Text>
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={()=>navigation.navigate('VenderItem')}>
        <Text style={styles.addButtonText}>+</Text>
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
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  },
  addButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  addButtonText: {
    color: 'white',
    fontSize: 30
  }
})

export default TelaVendedor
