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
      <View style={{ marginLeft: 25, width: '24px', height: '24px'}}>
        <Image source={require('./assets/arrow-left.png')}/>
      </View>
      <Text style={{
        marginTop: 15,
        fontSize : 27, 
        fontWeight : 'bold',
        marginRight: 47,
        alignSelf: 'center'
        }}>
          Create New Account </Text>
    </View>
    <View style={{ marginTop : 100 ,
       justifyContent: 'center', 
       alignItems : 'center',
       padding: 20}}>
        {/*email*/}
      <View style={{ width: '100%', marginBottom: 20}}>
<Text style={{fontSize:23 , fontWeight:600 , color :'#666666'}}>Full name</Text>
    <TextInput style={{
      borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            paddingVertical: 5,
            color: '#666666',
          }}
          placeholder="Enter your name"
          placeholderTextColor="#CCCCCC"
           />
      </View>
 
       {/*email*/}
       <View style={{ width: '100%', marginBottom: 20 , marginTop: 25}}>
<Text style={{fontSize:23 , fontWeight:600 , color :'#666666'}}>Email Address</Text>
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
       {/*password*/}
       <View style={{ width: '100%', marginBottom: 20, margintop: 27}}>
<Text style={{fontSize:23 , fontWeight:600 , color :'#666666'}}>Create password</Text>
    <TextInput style={{
      borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            paddingVertical: 5,
            color: '#666666',
          }}
          placeholder="Enter your password"
          placeholderTextColor="#CCCCCC"
           />
      </View>
       {/*Repeat password*/}
       <View style={{ width: '100%', marginBottom: 20 , marginTop: 25}}>
<Text style={{fontSize:22 , fontWeight:600 , color :'#666666'}}>Repeat password</Text>
    <TextInput style={{
      borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            paddingVertical: 5,
            color: '#666666',
          }}
          placeholder="Repeat new password"
          placeholderTextColor="#CCCCCC"
           />
      </View>
        </View>
        <View style={{ marginTop : 80}}>
          <TouchableOpacity style={{
            backgroundColor : '#0DCDAA',
            paddingHorizontal: 30,
            paddingVertical: 28,
borderRadius: 10,
marginLeft: 20,
margin: 20,
          }}>
 <Text
          style={{
            color: '#FFFFFF', 
            fontSize: 16, 
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