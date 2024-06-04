import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const ContactList = () => {

    const contacts = [
        {
          uid: 1,
          name: 'Shivaraj M',
          status: 'UI UX Designer',
          imageUrl: 'https://techtreeit.keka.com/files/fa1da03d-27dd-4207-bc6a-963f75017eb0/200x200/profileimage/3b3836e4491b4b9b965c6df0b7daef11.jpg?1717401600000',
        },
        {
          uid: 2,
          name: 'Rutik Kolhapure',
          status: 'Associate Business Consultant',
          imageUrl: 'https://techtreeit.keka.com/files/fa1da03d-27dd-4207-bc6a-963f75017eb0/200x200/profileimage/74e5eb623f7f4181a02244e5d76811d5.JPG?1717416000000',
        },
        {
          uid: 3,
          name: 'Anmol Revankar',
          status: 'Associate Business Consultant',
          imageUrl: 'https://techtreeit.keka.com/files/fa1da03d-27dd-4207-bc6a-963f75017eb0/200x200/profileimage/828580719aa646b88c38fac8f171c06f.jpg?1717416000000',
        },
        {
          uid: 4,
          name: 'Varun Patange',
          status: 'Senior Product Engineer - Android',
          imageUrl: 'https://techtreeit.keka.com/files/fa1da03d-27dd-4207-bc6a-963f75017eb0/200x200/profileimage/914890a247fb4aac899134ee2e65aeba.jpg?1717416000000',
        },
      ];


  return (
    <View>
      <Text style={styles.HeadingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl}) => (
          <View key={uid} style={styles.userCard}>

            <Image 
            source={
              {uri: imageUrl}
            } style={styles.imageStyle}
            />
            <View>
              <Text style={styles.nameStyle}>{name}</Text>
              <Text style={styles.statusStyle}>{status}</Text>
            </View>


          </View>
        ) )}

      </ScrollView>
     
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    HeadingText:{
        fontSize : 20,
        fontWeight : 'bold',
        paddingHorizontal:8

    },
    container:{
        paddingHorizontal:15,
        paddingTop:5,

        marginVertical:10,
       

    },
    userCard:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:5,
        backgroundColor: '#ffffff',
        elevation: 4,
        shadowOffset:{
            width:0.5,
            height:0.5
        },
        shadowColor: '#000000',
        shadowOpacity :0.1,
        shadowRadius: 5,
        padding:10,
        borderColor : '#E0E0E0',
        marginBottom : 10

    },
    imageStyle:{
        height:60,
        width:60,
        borderRadius: 30,
        marginRight: 10

    },
    nameStyle:{
        fontSize: 15,
        fontWeight : '600',
    

    },
    statusStyle:{
        fontSize: 12,
        fontWeight : '400',
        color: '#7B7B7B'

    }
    
})



 {/* <ScrollView style={styles.container} scrollEnabled={false}>

        {contacts.map(({uid, name, status, imageUrl}) => (

            <View key={uid} style={styles.userCard}>

                <Image
                source={{
                    uri : imageUrl
                }}
                style={styles.imageStyle} />

                <View>
                    <Text style={styles.nameStyle}>{name}</Text>
                    <Text style={styles.statusStyle}>{status}</Text>
                </View>
            </View>


        ))}

      </ScrollView> */}