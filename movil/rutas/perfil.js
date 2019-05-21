import React from 'react';
import {StyleSheet, Image,Text, View, Button, TouchableOpacity} from 'react-native'

class Perfil extends React.Component{
    render(){
        return(
        <View style={styles.container}>
           <View style={styles.font} >
                <Image
                style={{
                opacity: 0.3,
                alignSelf: 'center',
                height: 80,
                width: 120,
                borderWidth: 1,
                borderRadius: 50
                }}
                source={require('../assets/logo.jpg')}
                resizeMode="stretch"
                />
                <Text style={styles.textoUser}> Perfil del Usuario </Text>
                <Image
                style={{
                alignSelf: 'center',
                height: 80,
                width: 80,
                borderWidth: 1,
                borderRadius: 100
                }}
               
                source={require('../assets/FotoPerfil.jpg')}
                resizeMode="cover"
                />
                <Text style={styles.textoPerfil}> Sr. Tony Stark </Text>
                <Text style={styles.textoGen}>Paciente</Text>
                 
           </View>
           <View style={styles.advice}>
               <Text style={{fontSize: 32, color:"#FFFFFF",fontWeight: 'bold', textDecorationLine: 'underline', textAlignVertical: 'top' } }>Historial de citas</Text>

           </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "#545871"
    },
    advice:{
        height: 500,
        backgroundColor: "#545871"
    },

    font:{
        height: 400,
        width: 500,
        backgroundColor: "#FFFFFF"
    },
    menuBanner:{
        height: 30,
        backgroundColor: "#545871"
    },
    textoUser:{
        color:'#9597A6',
        textAlign:'left',
        paddingLeft: 100,
        fontWeight: 'bold',
        fontSize: 10
    },
    textoPerfil:{
        color:'#545871',
        textAlign:'center',
        fontSize: 20
    },
    textoGen: {
        color:'#9597A6',
        textAlign:'center',
        fontSize: 15
    }
    

});

export default Perfil;