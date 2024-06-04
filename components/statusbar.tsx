// CustomStatusBar.js

import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

const CustomStatusBar = ({
  children,
  statusBgColor = '#fff',
  barStyle = 'light-content',
  bgColor = '#fff',
}:any) => {
  return (
    
        <Fragment>
      <StatusBar backgroundColor={statusBgColor} barStyle={barStyle} />
      <SafeAreaView style={{ flex: 0, backgroundColor: statusBgColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        {children}
      </SafeAreaView>
    </Fragment>
  
   
    
  );
};

export default CustomStatusBar;