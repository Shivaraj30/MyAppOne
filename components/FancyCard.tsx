import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'


const FancyCard = () => {
  return (
  
    <View>
      <Text style={styles.HeadingText}>Top Locations</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styles.card, styles.Elevated]}>
        <Image source={{
          uri:'https://images.pexels.com/photos/19755053/pexels-photo-19755053/free-photo-of-red-fort-in-india.jpeg'}}
          style={styles.imageStyle}
          />
        <View style={styles.cardBody}>

          <Text style={styles.CardTitle}>India Gate</Text>
          <Text style={styles.CardLabel}>Monument in New Delhi</Text>
          <Text style={styles.CardDescription}>The India Gate is a war memorial located near the Kartavya path on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Rajpath in Chennai.</Text>
          <Text style={styles.CardFooter}>12 min Away</Text>
        </View>
      </View>

      <View style={[styles.card, styles.Elevated]}>
        <Image source={{
          uri:'https://images.pexels.com/photos/19755053/pexels-photo-19755053/free-photo-of-red-fort-in-india.jpeg'}}
          style={styles.imageStyle}
          />
        <View style={styles.cardBody}>

          <Text style={styles.CardTitle}>India Gate</Text>
          <Text style={styles.CardLabel}>Monument in New Delhi</Text>
          <Text style={styles.CardDescription}>The India Gate is a war memorial located near the Kartavya path on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Rajpath in Chennai.</Text>
          <Text style={styles.CardFooter}>12 min Away</Text>
        </View>
      </View>

       <View style={[styles.card, styles.Elevated]}>
        <Image source={{
          uri:'https://images.pexels.com/photos/19755053/pexels-photo-19755053/free-photo-of-red-fort-in-india.jpeg'}}
          style={styles.imageStyle}
          />
        <View style={styles.cardBody}>

          <Text style={styles.CardTitle}>India Gate</Text>
          <Text style={styles.CardLabel}>Monument in New Delhi</Text>
          <Text style={styles.CardDescription}>The India Gate is a war memorial located near the Kartavya path on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Rajpath in Chennai.</Text>
          <Text style={styles.CardFooter}>12 min Away</Text>
        </View>
      </View>
      <View style={[styles.card, styles.Elevated]}>
        <Image source={{
          uri:'https://images.pexels.com/photos/19755053/pexels-photo-19755053/free-photo-of-red-fort-in-india.jpeg'}}
          style={styles.imageStyle}
          />
        <View style={styles.cardBody}>

          <Text style={styles.CardTitle}>India Gate</Text>
          <Text style={styles.CardLabel}>Monument in New Delhi</Text>
          <Text style={styles.CardDescription}>The India Gate is a war memorial located near the Kartavya path on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Rajpath in Chennai.</Text>
          <Text style={styles.CardFooter}>12 min Away</Text>
        </View>
      </View>
      </ScrollView>
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
      flex:1,
      width:350,
      height:360,
      borderRadius:10,
      marginVertical:16,
      marginHorizontal:12,

    },
    Elevated:{
      backgroundColor : '#FFFFFF',
      elevation:5,
      shadowOffset:{
        width:1,
        height:1
      },
      shadowOpacity:0.5

    },
    imageStyle:{
      height:180,
      marginBottom:8,
      borderTopLeftRadius:10,
      borderTopRightRadius:10
   
    },
    cardBody:{
      flex:2,
      flexGrow:1,
      paddingHorizontal:12,
    

    },
    CardTitle:{
      color: '#000000',
      fontSize:20,
      fontWeight: 'bold'

    },
    CardLabel:{
      color: '#000000',
      fontSize:14,
      marginBottom:4,
      marginTop:2

    },
    CardDescription:{
      color: '#606060',
      fontSize:14,
      marginBottom:6,
      marginTop:6


    },
    CardFooter:{
      color: '#000000',
      marginTop: 10,
      marginLeft:'auto'

    }
})