import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, ToastAndroid, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'; 
import {Header} from 'react-native-elements';
import db from '../config'
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
  constructor(props){ 
    super(props); 
    this.state = { 
      title: '', 
      author: '', 
      storyText: '', 
 
  }
}   
      
submitStory = ()=>{ 
  console.log(db.collection("stories")) 
  db.collection("stories").add({ 
    title: this.state.title, 
    author: this.state.author, 
    storyText: this.state.storyText, 
    //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate() 
  }) 
  this.setState({
     title: '', 
     author: '', 
     storyText: '' 
    }) 
  ToastAndroid.show('Your story has been sumitted' , ToastAndroid.SHORT)
}
   
        render(){ 
          return( 
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled> 
          <Header backgroundColor = {'pink'} 
          centerComponent = {{ 
            text : 'Story Hub', 
            style : 
            { 
              color: 'black', 
              fontSize: 30 
              }
            }} 
          />
        
        <TextInput
          placeholder="Story Title" 
           onChangeText= {(text)=>{ 
             this.setState({ title: text  }) 
            }} 
            value={this.state.title} 
            style={styles.title}
          />
         
         <TextInput 
         placeholder="Author" 
         onChangeText= {(text)=>{ 
           this.setState({ title: text }) 
           }} 
           value={this.state.title} 
           style={styles.title}
           />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}
          >

        <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity> 
        </KeyboardAvoidingView>
       

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    titleBox:{
      width: 100,
      height: 75,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    authorBox:{
      width: 100,
      height: 75,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    storyBox:{
      width: 200,
      height: 200,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton: {
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
  });