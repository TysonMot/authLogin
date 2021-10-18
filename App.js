import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {SafeAreaView} from "react-native-web";
import Menu from "./components/menu"; 

export default function App() {
  return (
   <>
   <SafeAreaProvider>
       <SafeAreaView>
           <Menu/>
       </SafeAreaView>
   </SafeAreaProvider>
   </>
  );
}
