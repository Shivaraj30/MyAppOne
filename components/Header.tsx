import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import CustomStatusBar from './statusbar'




const Header = ({ title }:any) => {
    
    
  return (
    
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="#f7287b" barStyle="dark-content"  /> */}
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f7287b',
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    marginTop: -10
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
