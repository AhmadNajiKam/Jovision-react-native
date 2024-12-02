'use strict'
import { Button,Text } from "react-native"
import { getIpAsync,getIpBlocking } from "../Components/FetchIPs";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
const Task26 = () =>{
const [IP,setIP] = useState('0.0.0.0');
const [loading, setLoading] = useState(false);

return (<>
<Button title="Get IP Async" onPress={()=>{setIP(getIpAsync())}}></Button>
<Button title="Get IP"  onPress={()=>{setIP(getIpBlocking(setLoading))}} disabled={loading} ></Button>
<Text>{IP}</Text>
{loading && <ActivityIndicator size="large" color="#0000ff" />}

</>);

}
export default Task26;