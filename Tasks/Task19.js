'use strict';
import React, { Component ,setState} from 'react';
import { Button, View } from 'react-native';
import LoadingComponent from '../Components/MyClassComponent_Task18';
class Task19 extends Component{
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

export default Task19;