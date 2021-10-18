import React, {useState} from 'react';
import Users from './users';
import {Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {Header} from "react-native-elements";
import {BackgroundImage} from "react-native-elements/dist/config";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";
///import firebase from "./firebase";

const Adduser = ({ navigation }) => {
    
    const [ passCon, setPassCon ] = useState([])
    const [ name, setName] = useState()
    const [ email, setEmail ] = useState()
    const [ pass, setPass ] = useState()
    
    const img = { uri: 'https://images.pexels.com/photos/9676177/pexels-photo-9676177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}

    const createUser = () => {
        
        Users.createData(info).then(res => {
            console.log('posted data')
        }).catch(err => { console.log(err)})
            .finally(() => { console.log('done') })
    }
    
    const SignUp = () => {
        Users.signUp(email, pass, name)
    }

    
    return (
        <>
            <>
                <BackgroundImage source={img} resizeMode={'cover'} >
                    <View style={ styles.cover }>
                        <Text style={styles.heading }>SIGN UP</Text>

                        <View style={styles.loginArea}>
                            <TextInput tppe={'text'} style={styles.input} placeholder={'Name'} onChangeText={text => setName(text)}/>
                            <TextInput tppe={'text'} style={styles.input} placeholder={'Email'} onChangeText={text => setEmail(text)}/>
                            <TextInput secureTextEntry={true} style={styles.input} placeholder={'Password'} onChangeText={text => setPass(text)}/>
                            <TextInput secureTextEntry={true} style={styles.input} placeholder={'Confirm Password'} onChangeText={text => setPassCon(text)}/>
                        </View>
                        <View style={styles.loginButton}>
                            <Pressable style={styles.button} onPress={ SignUp } >
                                <Text>
                                    Sign in
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.accountArea}>
                            <Text style={styles.TextArea} onPress={() => navigation.goBack()}>HAVE AN ACCOUNT ? SIGN IN </Text>
                        </View>
                    </View>
                </BackgroundImage>
            </>
        </>
    )
}


const styles = StyleSheet.create({
    cover : {
        backgroundColor: rgbaColor(0,0,0,0.8),
        position: "relative",
        height: '100vh',
        width: '100%',
        padding: 40
    },
    heading: {
        color: 'white',
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "400",
        textAlign: "center",
        marginTop: 100
    },
    loginArea : {
        marginTop: 60
    },
    input : {
        borderWidth: 1,
        height: 40,
        marginTop: 15,
        borderColor: 'white',
        paddingLeft: 10,
        borderRadius: 10,
        color: 'white'
    },
    button : {
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        textAlign: "center",
        textTransform: "uppercase"
    },
    loginButton: {
        marginTop: 20
    },
    accountArea : {
        bottom: 10,
        textAlign: "center",
        color: 'white',
        width: '100%',
        marginTop: 40
    },
    TextArea :{
        color: 'white',
        textAlign: "center",
        fontSize: 9
    }
})

export default Adduser