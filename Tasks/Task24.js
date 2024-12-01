'use strict'
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { useRef } from "react";
import MyFunctionalComponent from "../Components/MyFunctionPage";
const Task24 = () =>{
    const [text,setText] = useState('Default');
    const CurrentChild = useRef();
    return (<>
     
    <TextInput
        style={styles.input}
        onChangeText={(text)=>{setText(text);CurrentChild.current.ChangeText(text);   
        }}
        >
        </TextInput>
        <MyFunctionalComponent ref={CurrentChild} />
    </>
   
      );
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  export default Task24;