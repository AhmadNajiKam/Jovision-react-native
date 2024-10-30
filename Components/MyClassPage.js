'use strict';
import React, { Component} from 'react';
import { Button, View } from 'react-native';
import LoadingComponent from '../Components/ActivityIndicatorComponent';
class MyClassPage extends Component{
    state = {
        LoadComponent :false,
    };
    whenPressed = () =>{
        this.setState({LoadComponent:true});
        setTimeout(()=>{this.setState({LoadComponent:false})},5000);
    }
    render(){
        return (
        <View>
        <Button
        onPress={this.whenPressed}
        title="Show"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {this.state.LoadComponent &&  <LoadingComponent />}
      </View>);
    }
    
}

export default MyClassPage;