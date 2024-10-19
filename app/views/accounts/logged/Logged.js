import React from 'react'
import {View, Text, Button} from 'react-native'
import * as firebase from 'firebase'

export default function Logged(){
    return (
        <View>
            <Text>Logeado...</Text>
            <Button title="Cerrar Sesión" onPress={()=>firebase.auth().signOut()}/>
        </View>        
    )
}