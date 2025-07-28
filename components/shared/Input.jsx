import React from 'react'
import { TextInput } from 'react-native'

export default function Input ({placeholder, password=false}) {
  
    return (
      <TextInput placeholder={placeholder} 
      secureTextEntry={password}
      style={{
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        paddingVertical: 20,
        width: '100%',
        marginTop:15,
      }}/>
    )
  }

