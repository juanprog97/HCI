import React, {Component} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './rutas/login.js';
import Perfil from './rutas/perfil.js';



const MainNavigator = createStackNavigator({
    Second:{screen: Perfil},
    First: {screen: Login}    
});
const App = createAppContainer(MainNavigator);
export default App;

