'use strict';
import { StyleSheet } from "react-native";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";
import { Text } from "react-native";
const MyFunctionalComponent = forwardRef((props, ref) => {
  const [text, setText] = useState('Default Text');

  useImperativeHandle(ref, () => ({
   ChangeText(input) {
      setText(input);
    }
  }));

  return (<Text ref={MyFunctionalComponent} style={styles}>{text}</Text>);
});

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default MyFunctionalComponent;