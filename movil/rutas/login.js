
import React from "react";
import Input from './textInput';


import { View, Text,TouchableHighlight , StyleSheet, Image} from "react-native";


class Login extends React.Component {
  
  render() {
      return (
        <View style={styles.container} >
          <Image
            style={{
            alignSelf: 'center',
            height: 80,
            width: 180,
            borderWidth: 1,
            borderRadius: 50
            }}
            source={require('../assets/logo.jpg')}
            resizeMode="stretch"
            />
            <Image
            style={{
            alignSelf: 'center',
            height: 150,
            width: 150,
            borderWidth: 1,
            borderRadius: 100
            }}
            source={require('../assets/FotoPerfil.jpg')}
            resizeMode="cover"
            />
          <Input placeholder = "Correo"/>
          <Input placeholder = "Contraseña"/>
          <TouchableHighlight
                 onPress={() => this.props.navigation.navigate('Second')}
                 style={styles.submit}
                 underlayColor='#fff'>
                <Text style={styles.submitText}>Iniciar Sesion</Text>
          </TouchableHighlight>
          <TouchableHighlight
                 style={styles.submit}
                 underlayColor='#fff'>
                <Text style={styles.submitText}>Registrar</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
  

const styles = StyleSheet.create({

  
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", 
        backgroundColor:"#545871",
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    submit:{
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:20,
      paddingBottom:20,
      backgroundColor:'#DADBE6',
      borderRadius:50,
      borderWidth: 1,
      borderColor: '#DADBE6',
      width: 300

    },
    submitText:{
        color:'#000000',
        textAlign:'center',
        fontSize: 20
    }
  
});
export default Login;