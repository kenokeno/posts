import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Routes from '../Stack/stackRoutes'
const Stack = createStackNavigator()

export default function AppStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Account" 
                    component={Routes.Account}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="Login" 
                    component={Routes.Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="Logged" 
                    component={Routes.Logged} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="Register" 
                    component={Routes.Register} 
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>        
    )
}