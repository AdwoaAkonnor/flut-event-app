import { View, Text, SafeAreaView , Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
    <View style={{ 
      justifyContent: 'space-between',
      marginTop:40, 
      flexDirection:'row',
      alignItems: 'center',
      marginTop: 30
    }}>
      <View style={{ marginLeft: 40, width: '24px', height: '24px'}}>
        <Image source={require('./assets/arrow-left.png')}/>
      </View>
      <Text style={{
        marginTop: 15,
        fontSize : 30, 
        fontWeight : 'bold',
        marginRight: 80
        }}>
          Welcome Back!</Text>
    </View>
    <View style={{ marginTop : 100 ,
       justifyContent: 'center', 
       alignItems : 'center',
       padding: 20}}>
        {/*email*/}
      <View style={{ width: '100%', marginBottom: 20}}>
<Text style={{fontSize:24 , fontWeight:600 , color :'#666666'}}>Email address</Text>
    <TextInput style={{
      borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            paddingVertical: 5,
            color: '#666666',
          }}
          placeholder="name@example.com"
          placeholderTextColor="#CCCCCC"
           />
      </View>
      {/* Password */}
      <View style={{ width: '100%', marginBottom: 20 , marginTop: 20}}>
        <Text style={{ color: '#666666', fontSize: 24, fontWeight: '600', marginBottom: 5 }}>
          Password
        </Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }}>
          
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 5,
              color: '#666666',
            }}
            placeholder="Enter your password"
            placeholderTextColor="#CCCCCC"
            secureTextEntry
          />
          <View style={{ marginLeft: 150}}>
  <Image source={require('./assets/eye.png')}/>
</View>
          </View>
  </View>
  
    </View>
    {/* Remember */}
  <View style={{  marginTop: 20, flexDirection: 'row'}}>
        <Text style={{ color: '#666666', fontSize: 24, fontWeight: '600', marginBottom: 5 , marginLeft: 20 }}>
          Remember me
        </Text>
<View style={{ marginLeft: 150}}>
  <Image source={require('./assets/Switch.png')}/>
</View>
        </View>
        {/*sign in */}
        <View style={{marginTop:200}}>
          <TouchableOpacity style={{
            paddingHorizontal: 20,
            paddingVertical: 25,
            backgroundColor: '#0DCDAA',
            borderRadius: 15,
            marginLeft: 23,
            marginRight: 23, 
          }} >
          <Text
          style={{
            color: '#FFFFFF', 
            fontSize: 18,
            fontWeight: '600', 
            alignSelf: 'center'
          }}
        >
          Sign in
        </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default App