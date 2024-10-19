import React, {useState, useRef} from 'react'
import {View, Image} from 'react-native'
import userImage from '../../../assets/anadir-amigo.png'
import {useNavigation} from '@react-navigation/native'
import * as firebase from 'firebase'
import {Input, Icon, Button} from 'react-native-elements'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {size, isEmpty} from 'lodash'
import Toast from 'react-native-easy-toast'
import {validateEmail} from '../../../apis/validations'
import Loading from '../../../components/loader'

import {styles} from './styles'

export default function Register(){
    const toastRef = useRef()
    const [formData, setFormData] = useState(defaultValueForm())
    const navigation = useNavigation()

    const [showPassword, setShowPassword] = useState()
    const [showRePassword, setShowRePassword] = useState()
    const [loading, setLoading] = useState(false)

    const onSubmit = ()=>{
        //console.log(formData)
        //console.log(validateEmail(formData.email))
        if(isEmpty(formData.email) || 
            isEmpty(formData.password) || 
            isEmpty(formData.rePassword)){
            toastRef.current.show("Todos los campos son obligatorios")
        }else if(!validateEmail(formData.email)){
            toastRef.current.show("El email no es correcto")
        }else if(formData.password !== formData.rePassword){
            toastRef.current.show("Las contraseñas no coinciden")
        }else if(size(formData.password)<6){
            toastRef.current.show("La contraseña tiene que tener al menos 6 caracteres")
        }else{
            setLoading(true)
            firebase
                .auth()
                .createUserWithEmailAndPassword(formData.email, formData.password)
                .then(response => {
                    setLoading(false)
                    navigation.navigate("Account")
                })
                .catch(err => {
                    setLoading(false)
                    toastRef.current.show("El correo electrónico ya esta en uso, intente con otro")
                })
        }
    }

    const onChange = (e, type) => {
        //console.log(e.nativeEvent.text)
        //setFormData({type: e.nativeEvent.text})
        //setFormData({[type]: e.nativeEvent.text})
        setFormData({...formData, [type]: e.nativeEvent.text})
    }

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image
                    source={userImage}
                />
            </View>
            <KeyboardAwareScrollView>
                <Input 
                    placeholder="Email"
                    containerStyle = {styles.inputForm}
                    onChange = {(e) => onChange(e, "email")}
                    rightIcon = {<Icon type="material-community" name="at" iconStyle = {styles.iconRight}/>}
                />
                <Input 
                    placeholder="Password"
                    containerStyle = {styles.inputForm}
                    password = {true}
                    secureTextEntry = {showPassword ? false : true}
                    onChange = {(e) => onChange(e, "password")}
                    rightIcon = {
                        <Icon 
                            type="material-community" 
                            name={showPassword ? "eye-off-outline" : "eye-outline"} 
                            iconStyle = {styles.iconRight} 
                            onPress = {() => setShowPassword(!showPassword)}
                        />
                    }                    
                />
                <Input 
                    placeholder="Repit Password"
                    containerStyle = {styles.inputForm}
                    password = {true}
                    secureTextEntry = {showRePassword ? false : true}
                    onChange = {(e) => onChange(e, "rePassword")}
                    rightIcon = {
                        <Icon 
                            type="material-community" 
                            name={showPassword ? "eye-off-outline" : "eye-outline"} 
                            iconStyle = {styles.iconRight} 
                            onPress = {() => setShowRePassword(!showRePassword)}
                        />
                    }
                />
                <Button 
                    title ="Registrar"
                    containerStyle = {styles.btnContainerRegister}
                    buttonStyle = {styles.btnRegister}
                    onPress = {onSubmit}
                />
                <Loading isVisible={loading} text="Creando cuenta"/>
            </KeyboardAwareScrollView>
            <Toast ref = {toastRef} position="center" opacity={0.9}/> 
        </View>
    )
}

function defaultValueForm(){
    return {
        email : "",
        password : "",
        rePassword : ""
    }
}