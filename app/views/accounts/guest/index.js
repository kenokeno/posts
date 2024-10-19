import React from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

import {styles} from './styles'

export default function Guest(){
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.viewBody}>
            <Image 
                source={require("../../../assets/user-guest.jpg")}
                resizeMode="contain" 
                style={styles.image}
            />
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.description}>Aqui puedes poner la descripción de la primer actividad a realizar dentro de la App</Text>
            <View style={styles.viewButton}>
                <Button 
                    title="Ver tu Prefil" 
                    buttonStyle={styles.btnStyle} 
                    containerStyle={styles.btnContainer} 
                    onPress={() => navigation.navigate("Login")}/>                
            </View>
        </ScrollView>
    )
}