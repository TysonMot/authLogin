import React, {useEffect, useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import Users from "./users"
import {Avatar, Header, ListItem} from "react-native-elements";

const About = ({ route, navigation }) => {
    
    const { itemId } = route.params
    const id = itemId
    

    return (
        <>
            <SafeAreaView>
                <Header style={styles.headerCover}>
                    
                </Header>
            </SafeAreaView>
        </>
    )
}


const styles = new StyleSheet.create({
    headerCover : {
        textAlign: 'center',
        padding: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        color: 'white'
    },
    textinput : {
        height: 50,
        padding: 9,
        margin: 4,
        borderRadius: 10,
        backgroundColor: 'gainsboro'
    },
    container : {
        padding:10
}
})

export default  About