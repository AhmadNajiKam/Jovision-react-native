'use strict'
import { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, ViewComponent } from 'react-native';
const Task16 = () =>{
    const [Hidden,setHidden] = useState(true);
    const name = "ahmad";
    function ShowMyName(){
        setHidden(!Hidden);
    }
    return (<ShowNameButton press={ShowMyName} state={Hidden} name={name}></ShowNameButton>
    );
} 
const ShowNameButton = (pressFunction) =>{
    
    return (<>
        <Button
          onPress={pressFunction.press}
          title="Show"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View>
            {!(pressFunction.state) ? <Text style= {styles.headerText}>{pressFunction.name}</Text>:null};
        </View>
         </>
            );
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        backgroundColor:"white"}
})

export default Task16;
