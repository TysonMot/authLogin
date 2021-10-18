import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from "./landing";
import About from "./about";
import Adduser from "./Adduser";

const Menu  = () => {
    
    const Stack = createNativeStackNavigator();
    
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator intialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={Landing}/>
                <Stack.Screen name={"About"} component={About}/>
                <Stack.Screen name={"Adduser"} component={Adduser}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

export default Menu