import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import {firebaseApp} from '../../apis/firebase'
import * as firebase from 'firebase'
import "firebase/auth"

import Guest from '../accounts/guest'
import Logged from '../accounts/logged/Logged'
import Loading from '../../components/loader'

export default function Account(){
    const [login, setLogin] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true)
        })
    }, [])

    if(login === null) return <Loading isVisible={true} text="Cargando"/>

    return login ? <Logged/> : <Guest/>
}