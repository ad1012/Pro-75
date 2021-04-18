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
                console.log("doesn't exist");

                break

                case 'auth/invalid-email':
                 Alert.alert('incorrect email or password')
                console.log('invalid');

                break

        }
    }
}
    else{
        Alert.alert('enter email and password')
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