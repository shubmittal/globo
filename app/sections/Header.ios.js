import React, { Component } from 'react';
import { Platform,StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    headText: {
        textAlign: "right",
        color: "#ffffff",
        fontSize: 20,
    },
    headStyle: 
    {
        paddingTop: 50,
        paddingBottom: 20,
        paddingRight: 10,
        backgroundColor: Platform.OS === "android"?"#31e981":"#35605a",
        flex:1
    }
})

class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      };
    };
    toggleUser = () =>  this.setState(previousState =>( {isLoggedIn : !previousState.isLoggedIn}))
    
    state = {  }
    render() { 
        let display = this.state.isLoggedIn? "Sample User" : this.props.message;
        return (  
            <View style = {styles.headStyle}>
            <Text  style = {styles.headText}onPress = {this.toggleUser}>{display}</Text>
            </View>
        );
    }
}
 
export default Header;