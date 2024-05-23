import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.HeadingText}>Top Locations</Text>
      <View style={[styles.card, styles.Elevated]}>
            
        </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    HeadingText:{
        fontSize : 20,
        fontWeight : 'bold',
        paddingHorizontal:8

    },
    card:{

    },
    Elevated:{

    }
})