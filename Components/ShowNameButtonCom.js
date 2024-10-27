import { Platform, StyleSheet, View, Text, Button, ViewComponent } from 'react-native';

const ShowNameButton = (pressFunction) =>{
    
    return (<>
        <Button
          onPress={pressFunction.press}
          title={pressFunction.title}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View>
            {!(pressFunction.state) ? <Text style= {styles.headerText}>{pressFunction.name}</Text>:null};
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
export default ShowNameButton;