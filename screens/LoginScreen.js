import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Alert, TextInput} from 'react-native';
import firebase from "firebase";

export default class LoginScreen extends React.Component {
constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  showAlert(errorCode){ 
    switch(errorCode){ 
      case 'auth/too-many-requests': 
      Alert.alert('To many requests\nTry again later') 
      this.setState({ email:"", password : "" })

      break 

      case 'auth/wrong-password': 
      Alert.alert('Enter Correct password') 
      this.setState({ password : "" }) 
      break 
      default: this.setState({ email:"", password : "" }) 
      return Alert.alert('Invalid email and password') 
    } 
  }

 render() {
    return (
      <View style={styles.container}> 
      <View style={styles.subContainer1}> 
      <Text style={styles.title}>Bedtime Stories</Text>
       
      <Image source = { require("../assets/icon.png")} 
      style={styles.image} 
      /> 
      <TextInput placeholder="programmer@whitehatjr.com" 
      placeholderTextColor = "#ffff" 
      onChangeText= {(emailText)=>{
      this.setState({ email: emailText })
      }} 
      value={this.state.email} 
      style={styles.textInput} 
      /> 

      <TextInput placeholder="password" 
      placeholderTextColor = "#ffff" 
      onChangeText= {(passwordText)=>{ 
        this.setState({ password: passwordText }) 
        }} 
        value={this.state.password} 
        style={styles.textInput} 
        secureTextEntry = {true} 
      />
</View>

<View style={styles.subContainer2}> 
<TouchableOpacity style={styles.button} 
onPress = {async()=>{ 
    var email = await this.state.email;
    var password = await this.state.password 
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{ 
        this.props.navigation.navigate('WriteStory') 
    })
    .catch((error)=> { 
        var errorCode = error.code; 
        var errorMessage = error.message; 
        return this.showAlert(errorCode) 
    }) 
}} 
> 
<Text style={styles.buttonText}>Login</Text> 
</TouchableOpacity> 
</View> 
</View>
        );
    }
}
  const styles = StyleSheet.create({
      loginBox:{
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
      },
      subContainer1:{
        flex:1,
      },
      subContainer2:{
        flex:1,
      },
      button:{
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },
      title:{
        textAlign: 'center', 
        fontSize: 30,
        marginTop: 50
      }
    });
