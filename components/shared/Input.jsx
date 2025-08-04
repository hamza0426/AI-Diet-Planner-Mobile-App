import React from 'react'
import { TextInput } from 'react-native'
import { View,Text } from 'react-native'

export default function Input ({placeholder, password=false, onChangeText, label=''}) {
  
    return (
      <View style={{
        marginTop:15,
        width:'100%',
        fontSize:18
      }}>
        <Text style={{
          fontWeight: 'medium'
        }}>{label}</Text>
      <TextInput placeholder={placeholder} 
      secureTextEntry={password}
      onChangeText={(value) => onChangeText(value)}
      style={{
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        paddingVertical: 20,
        width: '100%',
        marginTop:2,
      }}/>
      </View>
    )
  }

