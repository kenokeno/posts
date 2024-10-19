import React, {useState, useRef} from 'react'
import {View, Image, Text} from 'react-native'
import userImage from '../../../assets/padlock.png'
import {useNavigation} from '@react-navigation/native'
import Toast from 'react-native-easy-toast'
import * as firebase from 'firebase'
import Loading from '../../../components/loader'

import Button from "../../../components/button"
import Input from "../../../components/input"
import {styles} from './styles'

export default function Login(){
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()

    const toastRef = useRef()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image
                    source={userImage}
                />
            </View>
            <View style={styles.subcontainer}>
                <Input 
                    title="Email:"
                    custom={{
                        value: {Email},
                        onChangeText: em => setEmail(em),
                    }}
                />
                <Input 
                    title="Password:"
                    custom={{
                        value: {Password},
                        onChangeText: psw => setPassword(psw),
                        secureTextEntry: true,
                    }}
                />
                <Button 
                    title ="Entrar"
                    action = {()=>{
                        setLoading(true)
                        console.log(Email, Password)
                        firebase
                            .auth()
                            .signInWithEmailAndPassword(Email, Password)
                            .then(()=>{
                                setLoading(false)
                                navigation.navigate("Account")
                            })
                            .catch(()=>{
                                setLoading(false)
                                toastRef.current.show("Email o Password incorrectos")
                            })
                    }}
                />
                <CreateAccount/>                
                <Loading isVisible={loading} text="Iniciando Sesión"/>
            </View> 
            <Toast ref = {toastRef} position="center" opacity={0.9}/> 
        </View>
    )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style={styles.textRegister}>
            ¿Aun no tienes una cuenta? {" "}
            <Text 
                style={styles.btnRegister} 
                onPress={()=> navigation.navigate('Register')}>
                Registrate
            </Text>
        </Text>
    )
}