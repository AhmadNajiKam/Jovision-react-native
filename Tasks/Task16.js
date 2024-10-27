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
    {!Hidden ? <Text style= {styles.headerText}>{name}</Text>:null};
</View>
 </>
    );
} 
const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        backgroundColor:"white"}
})

export default Task16;
