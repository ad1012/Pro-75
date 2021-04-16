import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import firebase from "firebase";

export default class LoginScreen extends React.Component {
constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

login=async(email,password)=>{
    if (email&&password){
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
                this.prop.navigation.navigate("WriteStory")
            }
        }
        catch(error){
            switch (error.code) {
                case 'auth/user-not-found':
                 Alert.alert("User not Found")
                : ToastAndroid.show("User doesn't exist", ToastAndroid.SHORT);
                console.log("doesn't exist");

                break;

                case 'auth/invalid-email':
                 Alert.alert('incorrect email or password')
                : ToastAndroid.show("User doesn't exist", ToastAndroid.SHORT);
                console.log('invalid');

        }
    }
}
    else{
        Alert.alert('enter email and password')
    }
}

 render() {
    return (
    <View>        
    <Text> Login Screen </Text>
    </View>
      
  <KeyboardAvoidingView style = {{alignItems:'center', marginTop: 20}}>
  <View>
  <TextInput
  style = {styles.loginBox}
  placeholder = 'abc123@email.com'
  keyboardType = 'email-address'
  onChangeText = {(text)=>{
      this.setState({
          emailId: text
      })
  }}
  />
  <TextInput 
  style= {styles.loginBox}
  secureTextEntry = {true}
  placeholder = 'Enter Password'
  onChangeText = {(text)=>{
      this.setState({
          password: text
      })
  }}
  />
</View>

<View>
<TouchableOpacity style = {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 2}}
onPress ={()=>{this.Login(this.state.emailId, this.state.password)}}>
<Text style={{textAlign: 'center'}}>Login</Text>
</TouchableOpacity>

</View>
</KeyboardAvoidingView>
    );
}
}
  const styles = StyleSheet.create({
      loginBox:
      {
          width: 300,
          height: 40,
          borderWidth: 1.5,
          fontSize: 20,
          margin: 10,
          paddingLeft: 10
      
      }
  })