'use strict';
import React, { Component} from 'react';
import { Text } from 'react-native';

class MyClassPage extends Component{

    state = {
      text :'Default Text',
    };
    setText = (input) =>{
        this.setState({text:input});
    }
   render(){
  return (<Text>{this.state.text}</Text>);


   }
    
}

export default MyClassPage;
