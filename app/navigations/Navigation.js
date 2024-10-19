import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Accounts from '../screens/Accounts'

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="accounts" 
                    component={Accounts}
                    options = {{title: "Cuenta"}}
                /> 
            </Tab.Navigator>
        </NavigationContainer>
    )
}