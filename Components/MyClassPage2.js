'use strict';

import { Component } from "react";
import { View,Button } from "react-native";
import LoadingComponent from "./ActivityIndicatorComponent";
class MyClassPage2 extends Component {
    constructor(props){
        super(props);
        this.state = {Loaded : false};
    }
    componentDidMount(){
        console.log("Successfully loaded");
    }
    componentWillUnmount(){
        console.log("Successfully unloaded");  
    }

    whenPressed = () =>{
        this.setState({Loaded:true});
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
      {this.state.Loaded &&  <LoadingComponent/>}
      </View>);
    }
}

export default MyClassPage2;