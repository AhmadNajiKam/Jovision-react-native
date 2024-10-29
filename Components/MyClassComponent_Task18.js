'use strict'
import { useState } from 'react';
import {Text, View,StyleSheet,ActivityIndicator} from 'react-native';

const LoadingComponent = () =>
{
    let [value,setValue] = useState(true);
     
    setTimeout(setValue,5000,false);
return (
 viewLoadingCom(value)
);
};
const viewLoadingCom = (value) =>{
return(
<View>
{
value?
<>
<ActivityIndicator size="large" color="#00ff00" />
<Text style={styles.headerText}>Loading ...</Text>
</>
:null}
</View>
);

};
export default LoadingComponent;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        backgroundColor:"white"}
})