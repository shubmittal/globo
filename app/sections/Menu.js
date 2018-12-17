import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

class Menu extends Component {
    
    onPress = () => {Alert.alert("You tapped the button")}
    render() { 
       return (
           <View style={styles.container}>
           <View style = {styles.buttonRow}>
           <TouchableOpacity style = {styles.buttonStyles} onPress= {this.onPress}>
           <Text style = {styles.buttonText}>Lessons</Text>
           </TouchableOpacity>
           <TouchableOpacity style = {styles.buttonStyles} onPress= {this.onPress}>
           <Text style = {styles.buttonText}>Register</Text>
           </TouchableOpacity>
           </View>

             <View style = {styles.buttonRow}>
           <TouchableOpacity style = {styles.buttonStyles} onPress= {this.onPress}>
           <Text style = {styles.buttonText}>Blog</Text>
           </TouchableOpacity>
           <TouchableOpacity style = {styles.buttonStyles} onPress= {this.onPress}>
           <Text style = {styles.buttonText}>Contact</Text>
           </TouchableOpacity>
           </View>

              <View style = {styles.buttonRow}>
           <TouchableOpacity style = {styles.buttonStyles} onPress= {this.onPress}>
           <Text style = {styles.buttonText}>Quiz</Text>
           </TouchableOpacity>
           <TouchableOpacity style = {styles.buttonStyles} onPress= {this.onPress}>
           <Text style = {styles.buttonText}>About</Text>
           </TouchableOpacity>
           </View>

           </View>

         );
    }
}

export default Menu;

const styles =  StyleSheet.create({
container: {
    flex:6,
    backgroundColor: "#35605a"
},
buttonRow : {
flex:2,
flexDirection: 'row',
alignItems: 'center',
borderColor: "#ffffff",
borderBottomWidth: 1
},
buttonStyles: {
    backgroundColor: "#35605a",
    height: "50%",
    width: "50%",
    justifyContent:'center',
    alignItems: "center"

},
buttonText: {
    color: "#ffffff",
    fontSize: 18
}
})

