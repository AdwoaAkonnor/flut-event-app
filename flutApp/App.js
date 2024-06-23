
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <SafeAreaView 
    style={{backgroundColor : '#0DCDAA'
     , flex: 1
     }}>
    <View style={{ flex :1 ,
       justifyContent : 'center'
       }}>
      <Text 
      style={{
        alignSelf :'center',
         color :'#FFFFFF',
         fontSize: '100px',
         fontWeight: 'bold',
         fontFamily : 'skia'
         }}>Flut</Text>
    </View>
    </SafeAreaView>
  )
}

export default SplashScreen 
