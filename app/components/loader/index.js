import React from 'react'
import {ActivityIndicator, Text, View} from 'react-native'
import {Overlay} from 'react-native-elements'

import {styles} from './styles'

export default function Loading(props){
    const {isVisible, text} = props

    return(
        <Overlay 
            isVisible ={isVisible}
            windowBackgroundColor = "rgba(0,0,0,0.5)"
            overLayBakcgroundColor = "transparent"
            style = {styles.overlay}
        >
            <View style={styles.view}>
                <ActivityIndicator size="large" color="#00a680"/>
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}