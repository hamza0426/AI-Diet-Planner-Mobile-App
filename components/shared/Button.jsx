import Colors from '@/shared/Colors'
import React from 'react'
import { Text, TouchableOpacity} from 'react-native'

export default function Button({title, onPress}) {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={{
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            width: '100%',
            borderRadius: 50,
        }}>
            <Text style={{
                fontSize: 20,
                color: Colors.WHITE,
                textAlign: 'center',
            }}>{title}</Text>
        </TouchableOpacity>
    )
}
