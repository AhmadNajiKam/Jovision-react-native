'use strict'
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { useRef } from "react";
import MyClassPage from "../Components/MyClassPage";
const Task25 = () =>{
    const [text,setText] = useState('Default');
    const CurrentChild = useRef(null);
    const changeInput = (input) =>{
        setText(input);CurrentChild.current.setText(text);   
    }
    return (<>
     
    <TextInput
        style={styles.input}
        onChangeText={changeInput}
        >
        </TextInput>
        <MyClassPage ref={CurrentChild} />
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
  export default Task25;