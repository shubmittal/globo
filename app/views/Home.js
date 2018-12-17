import React, {Component} from 'react';
import {  StyleSheet, Text,View } from 'react-native';
import Header from '../sections/Header'



class Home extends Component {
    state = {  }
    render() {
        return ( 

            <View style = {styles.container}>
                <Header message = "Press to login" />
                <Text style = {{flex:8}}>This will be homepgae</Text>
                
                
            </View>
         );
    }
}
 
export default Home;

const styles = StyleSheet.create({
    container : {
        flex:1
    }
})