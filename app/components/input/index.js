import React from 'react'
import {TextInput, Text} from 'react-native'

import {styles} from './styles'

export default function Input({title, custom}){
    return (
        <>
            <Text style={styles.label}>{title}</Text>
            <TextInput 
                style={styles.input}
                {...custom}
            />
        </>
    )
}