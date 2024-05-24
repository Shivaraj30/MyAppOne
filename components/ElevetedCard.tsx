import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevetedCard = () => {
  return (
    <View>
      <Text style={styles.HeadingText}>ElevetedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.Elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text>here</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text>😃</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevetedCard

const styles=StyleSheet.create({
    HeadingText:{
        fontSize : 20,
        fontWeight : 'bold',
        paddingHorizontal:8

    },
    container:{
        padding: 8

    },
    card:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
        width:100,
        borderRadius:4,
        margin:8
        

    },
    Elevated:{
        backgroundColor:'lightgray',
        elevation: 15,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor:'#000000',
        shadowOpacity:0.2

    }
})