import React, { Component } from "react";
import { StyleSheet, View, Button, StatusBar,Text, Image,SafeAreaView, Platform  } from "react-native";
import firebase from "firebase";

export default class Logout extends Component{
    componentDidMount(){
        firebase.auth().signOut()
    }
    render(){
        return(
            <View>
                <Text style={{flex:1,
                justifyContent:"center",
                alignItems:"center"
                }}>Logout</Text>
            </View>
        )
    }
}