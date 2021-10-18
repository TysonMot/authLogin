import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from "./landing";
import About from "./about";
import Adduser from "./Adduser";
import firebase from './firebase'

const Menu  = () => {
    
    const Stack = createNativeStackNavigator();
    const uid =  localStorage.getItem('userid')
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator intialRouteName={"Home"}>
                {uid ? (
                    <>
                        <Stack.Screen name={"About"} component={About}/>
                    </>
                ): (
                    <>
                        <Stack.Screen name={"Home"} component={Landing}/>
                        <Stack.Screen name={"Adduser"} component={Adduser}/>
                        <Stack.Screen name={"About"} component={About}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

export default Menu