import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <View>
      <Text style={styles.HeadingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      
       
    
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText:{
        fontSize : 20,
        fontWeight : 'bold',
        paddingHorizontal:8

    },
    container:{
        flex:1,
        flexDirection:'row'

    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        width:120,
        height:100,
        borderRadius:5,
        margin:8
        

    },
    cardOne:{
        backgroundColor : 'red'

    },
    cardTwo:{
        backgroundColor : 'green'

    },
    cardThree:{
        backgroundColor : 'blue'

    }
})