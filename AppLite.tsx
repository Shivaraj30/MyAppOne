import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevetedCard from './components/ElevetedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

export default function AppLite() {
  return (
    <SafeAreaView>
        <ScrollView >
       <FlatCards />
       <ElevetedCard />
       
       <FancyCard /> 
       <ActionCard />
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  
    // container:{
    //     flex: 1,
    //     flexDirection:'row',
    //     padding: 8

    // }
    
})


