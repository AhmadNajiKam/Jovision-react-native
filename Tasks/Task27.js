'use strict'

import { Button, Image} from "react-native";
import { Alert } from "react-native";
import React, { useState } from 'react';
const Task27 =() =>{
const [frog,setFrog] = useState(0);

const createThreeButtonAlert = () =>
    Alert.alert('Choose your frog', 'We have 3 cute frogs', [
      {
        text: 'Bee Frog',onPress: () => setFrog(1),
      },
      {
        text: 'Rain Frog',onPress: () => setFrog(2),
      },
      {text: 'Green Frog', onPress: () => setFrog(3)},
    ]);

return (
<> <Button title="Choose picture" onPress={()=>{setFrog(0);createThreeButtonAlert()}}></Button>
   {(frog==1)&&<Image source={require('../Resource/Bee_Frog.jpg')}  style={{width: 400, height: 400}}></Image>}
   {(frog==2)&&<Image source={require('../Resource/Rain_Frog.jpg')}  style={{width: 400, height: 400}}></Image>}
    {(frog==3)&&<Image source={require('../Resource/Green_Frog.jpg')}  style={{width: 400, height: 400}}></Image>}
   </>

);

}

export default Task27;