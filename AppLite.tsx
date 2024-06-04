import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevetedCard from './components/ElevetedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import Header from './components/Header'
import CustomStatusBar from './components/statusbar'



export default function AppLite() {
  return (

    <CustomStatusBar statusBgColor="#f7287b">
      <View
        style={{
          backgroundColor: '#FFFFFF',
        
          flex: 1,
        }}>
        <SafeAreaView style={styles.container} >

      
      
        
<Header title="My App One" style={styles.headerStyle} />
<ScrollView >
<View style={styles.screen}>
<FlatCards />
<ElevetedCard />

<FancyCard /> 
<ContactList />
<ActionCard />
  </View>
</ScrollView>
</SafeAreaView>
      </View>
    </CustomStatusBar>
    
  )
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    marginTop:10
  },
  container: {
    flex: 1,
  },
  headerStyle:{
  //   position: 'absolute',
  //  marginBottom: 10
  }

  
    // container:{
    //     flex: 1,
    //     flexDirection:'row',
    //     padding: 8

    // }
    
})


