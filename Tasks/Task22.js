'use strict';
import { useState } from "react";
import { Text } from "react-native";
import MyFunctionalComponent from "../Components/MyFunctionPage";
const Task22 = () =>{
    const [text,setText] = useState('First text');
return (<><Text >{text}</Text>
<MyFunctionalComponent fun={setText}> </MyFunctionalComponent></>

);
}
export default Task22;