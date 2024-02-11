import React from "react";
import { Portal, Modal, Text, Button } from "react-native-paper";
import { View } from "react-native";


const Modifybutton = ({}) => {
    
    
    return (
        <View>
            <Button 
            icon='pencil'
            mode="contained-tonal"
            onPress={() => console.log('Pressed')}
            style={{margin: 15}}
            >
                {"Modifier la tâche"}
            </Button>
        </View>
    );
    }

    export { Modifybutton };