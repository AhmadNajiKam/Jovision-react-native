'use strict';
import { Button } from "react-native";
import MyFunctionalComponent from "../Components/MyFunctionalComponent";
import { useEffect,useState } from "react";
const Task21 =()=>{
const [Load,setLoad] = useState(true);
useEffect(()=>{
if(Load==true)console.log("Successfully loaded");
else console.log("Succeffully unloaded");
},[Load]);

return (
<>
<Button
          onPress={()=>{setLoad(!Load)}}
          title="Show"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
    Load&& <MyFunctionalComponent>

    </MyFunctionalComponent></>
);

}

export default Task21;