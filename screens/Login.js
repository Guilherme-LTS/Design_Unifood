import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Image
                source={require('../assets/logo.png')} 
                style={{width: 500, height: 125, resizeMode: 'contain', marginTop: -100, marginBottom: 50}}
            />
            
            <TouchableOpacity 
                style={{backgroundColor: 'green', padding:10, borderRadius: 5, marginBottom:10}}
                onPress={()=>navigation.navigate("Registro")}>
                <Text style={{color: 'white'}}>   Acessar como aluno   </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{backgroundColor: 'blue', padding:10, borderRadius: 5}}
                onPress={()=>navigation.navigate("Vendedor")}>
                <Text style={{color: 'white'}}>Acessar como vendedor</Text>
            </TouchableOpacity>

        </View>

        
    )
}

export default Login