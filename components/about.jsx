import React, {useEffect, useState} from 'react';
import {Button, FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import Users from "./users"
import {Avatar, Header, ListItem} from "react-native-elements";
import firebase from "./firebase";

const About = ( navigation ) => {
    
    
    const [name,setName ] = useState('')
    const [email,setEmail ] = useState()
 
    
    useEffect(() => {
        const id = localStorage.getItem('userid')
        Users.getLoggedData(id).on('value', snapshot => {
            const data = snapshot.val()
            setName(data.name)
        })
    })
    
    const logout = () => {
        Users.logOut(navigation)
    }
    
    return (
        <>
       <View style={styles.container}>
          <Pressable onPress={ logout } style={styles.logout}>
              <Text style={styles.logoutText}>
                  Logout
              </Text>
          </Pressable>
       </View>
        </>
    )
}


const styles = new StyleSheet.create({
    container : {
        width: 100,
        height: 100,
        backgroundColor: '#262626',
        padding: 10,
        borderBottomRightRadius: 50,
        textAlign: "center"
    },
    logout : {
        color: 'white',
        paddingTop:23
    },
    logoutText : {
        textTransform: "uppercase",
        color: 'white',
        fontWeight: "900"
    }
})

export default  About