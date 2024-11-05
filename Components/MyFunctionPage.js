'use strict';
import { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
const MyFunctionalComponent = (props) =>
{
    const [text,setText] = useState('Useless');
return (<TextInput
    style={styles.input}
    onChangeText={(text)=>{setText(text);props.fun(text);}}
    value={text}
  />);
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default MyFunctionalComponent;