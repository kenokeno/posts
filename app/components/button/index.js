import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

import {styles} from './styles'

export default function Button({title, action}){
    return (
        <TouchableOpacity
            style = {styles.btn}
            onPress = {action}
        >
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    )
}