import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() === "dark"
    return(
        <View style={styles.Container}>
            <Text style={isDarkMode ? styles.WhiteText : styles.WhiteText}>Hello</Text>
        </View>
    )

}

const styles = StyleSheet.create(
    {
     Container :{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
     },
     WhiteText:{
        color:'#FFFFFF'
     },
     DarkText:{
        color:'#000000'
     }

    }
)

export default AppPro