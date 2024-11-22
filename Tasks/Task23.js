'use strict';
import { useState } from "react";
import { Text } from "react-native";
import MyClassPage from "../Components/MyClassPage";
const Task23 = () =>{
    const [text,setText] = useState('First text');
return (<><Text>{text}</Text>
<MyClassPage fun={setText}>
</MyClassPage>
</>

);
}
export default Task23;