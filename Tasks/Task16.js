import { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, ViewComponent } from 'react-native';
const Task16 = () =>{
    const [Hidden,setHidden] = useState(true);
    const name = "ahmad";
    function ShowMyName(){
        setHidden(!Hidden);
    }
    return (<>
<Button
  onPress={ShowMyName}
  title="Show"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<View>
    {!Hidden ? <Text>{name}</Text>:null};
</View>
 </>
    );
} 



export default Task16;
