import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function OpenWesbite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.HeadingText}>My Blogs</Text>
      <View style={[styles.card , styles.elevetedCard]}>
                <View style={styles.HeadingContainer}>
                    <Text style={styles.TextStyle}>
                    The Basics About Travel In India
                    </Text>

                </View> 
                    <Image source={{
                        uri:'https://indiaforbeginners.com/wp-content/uploads/2023/09/Chai.jpg'
                    }} style={styles.ImageStyle}></Image>
                    <Text style={styles.bodyContent}>
                    There’s a lot to learn about travel in India, from what to wear, to how to book trains, to preventing Delhi belly. There is nowhere like India. Even if you’ve travelled extensively in Asia, India is different. There is a steep learning curve to travel in India, a lot you need to learn
                    </Text>
                    <View style={styles.FooterStyle}>
                        <TouchableOpacity onPress={() => OpenWesbite('https://indiaforbeginners.com/the-basics-about-travel-in-india/')}>
                            <View style={styles.textContainer}>
                            <Text style={styles.buttonStyle}>Click More</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => OpenWesbite('https://indiaforbeginners.com/the-basics-about-travel-in-india/')}>
                            <View style={styles.textContainer}>
                            <Text style={styles.buttonStyle}>Follow Me</Text>
                            </View>
                        </TouchableOpacity>

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
    card:{
        width:350,
        height:420,
        marginHorizontal:10,
        marginVertical:16,
        borderRadius:10
        

    },
    elevetedCard:{
        backgroundColor: '#CFBEF7',
        elevation: 5,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: '#000000',
        shadowOpacity:0.2,
        
        
        

    },
    HeadingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent :'center',
        alignItems: 'center'

    },
    TextStyle:{
        fontSize:18,
        fontWeight: 'bold'
        

    },
    ImageStyle:{
        height:200,
        

    },
    bodyContent:{
        padding:10

    },
    FooterStyle:{
        flex:1,
        padding:10,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    

    },
    buttonStyle:{
        fontSize:15,
       
       
        
        

        
    },
    textContainer:{
        flex:1,
        backgroundColor: '#FFF',
        color: '#000000',
        paddingVertical:10,
        paddingHorizontal:35,
        borderRadius:5

    }
})