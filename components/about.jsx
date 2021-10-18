import React, {useEffect, useState} from 'react';
import {Button, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import Users from "./users"
import {Avatar, Header, ListItem} from "react-native-elements";
import firebase from "./firebase";

const About = ( navigation ) => {
    
    
    const [name,setName ] = useState('')
    const [email,setEmail ] = useState()
    const  img  = 'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png'

    useEffect(() => {
        const id = localStorage.getItem('userid')
        Users.getLoggedData(id).on('value', snapshot => {
            const data = snapshot.val()
            setName(data.name)
            setEmail(data.email)
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
            <View style={styles.imageContainer}>
                <Image style={styles.tinyLogo} source={{ uri : 'https://static.thenounproject.com/png/2518416-200.png'}}/>
            </View>
            <View style={styles.heading}>
                <Text style={styles.heading}>
                    User data
                </Text>
            </View>
            <View style={styles.userContainer}> 
                <Text>
                     { name }
                </Text>
                <Text>
                     { email }
                </Text>
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
    imageContainer :{
        width: '100%',
        padding:40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    logout : {
        color: 'white',
        paddingTop:23
    },
    logoutText : {
        textTransform: "uppercase",
        color: 'white',
        fontWeight: "900"
    },
    heading: {
        textAlign:"center",
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "900"
    },
    userContainer : {
        textAlign: 'center',
        marginTop: 20
    }
})

export default  About