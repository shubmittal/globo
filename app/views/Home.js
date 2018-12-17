import React, {Component} from 'react';
import {  StyleSheet, Text,View } from 'react-native';
import Header from '../sections/Header'
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';



class Home extends Component {
    state = {  }
    render() {
        return ( 

            <View style = {styles.container}>
            <Header message = "Press to login" />
              <Hero/>
             <Menu/>       
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