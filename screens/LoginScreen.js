import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput} from 'react-native';
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
    <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
    <View>
    <Text style={{textAlign: 'center', fontSize: 30}}>Login Screen</Text>
    </View>
      
      <View>
      <TextInput
        style={styles.loginBox}
        placeholder="abc@example.com"
        keyboardType ='email-address'
        onChangeText={(text)=>{
          this.setState({
            emailId: text
          })
        }}
      />

  <TextInput
    style={styles.loginBox}
    secureTextEntry = {true}
    placeholder="enter Password"
    onChangeText={(text)=>{
    this.setState({
    password: text
        })
    }}
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
</KeyboardAvoidingView>
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
