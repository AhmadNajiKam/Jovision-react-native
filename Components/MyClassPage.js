'use strict';
import React, { Component} from 'react';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
class MyClassPage extends Component{
    state = {
      text :'Useless',
    };
    setText = (input) =>{
        this.setState({text:input});
    }
    render(){
        return (
          <TextInput
          style={styles.input}
          onChangeText={(text)=>{this.setText(text);this.props.fun(text);}}
          value={this.text}
        />);
    }
    
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default MyClassPage;
