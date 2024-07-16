import React, { useState } from 'react';
import { StyleSheet,SafeAreaView,View,Image , Animated,Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';
import { setAgecnyLoginData } from '../appSlice/appSlices';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';



const AgencyLogin = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [selectedAgency, setSelectedAgency] = useState('');
  const navigator =useNavigation()

  
  const HandleLogin =(e)=>{
    e.preventDefault();
    dispatch(setAgecnyLoginData([selectedAgency , email , password]));
    setPassword('');
    setEmail('')
    navigator.navigate('pages')
  }




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#032B44',width:'100%' }}>
    <View style={{ flex: 1, alignItems:'center',paddingTop:'12%'}}>
        <Text style={styles.title}>ETIX</Text>
      </View>
    <View style={styles.loginContainer}>
    <View style={styles.loginBox}>
    
      <Picker
        style={styles.input}
        selectedValue={selectedAgency}
        onValueChange={(itemValue) => setSelectedAgency(itemValue)}
      >
        <Picker.Item label="Choose your Agency"  disabled={true} />
        <Picker.Item label="Volcano" value="Volcano" />
        <Picker.Item label="Horizon" value="Horizon" />
        <Picker.Item label="Litico" value="Litico" />
      </Picker>
    
      <TextInput
        placeholder="  Email"
        className='mt-7'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        className='mt-7'
        placeholder="  Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text className='text-blue-600 text-psemibold   mt-2  text-end' style={styles.forgotPasswordText}>
        Forgot password
      </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={HandleLogin}  style={styles.loginButtonContainer}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText} >Login</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  
  },

  loginContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

 
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5EDF0',
    width: Dimensions.get('screen').width * 0.90,
    height: Dimensions.get('screen').height * 0.50,
    borderRadius: 10,
    position: 'relative',
    top: '-30%',
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').width * 0.8,
    backgroundColor: '#032B44',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 30,
    height: 23,
  },
  googleLoginText: {
    color: 'white',
    fontSize: 15,
  },
  input: {
    height: Dimensions.get('screen').height * 0.07,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'white'
    
  },
  forgotPasswordText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
    marginBottom: 10,
  },
  orText: {
    fontSize: 20,
  },
  signupText: {
    fontSize: 18,
    color: '#032B44',
    fontWeight: '600',
   
  },
  signupLink: {
    fontSize: 20,
    fontWeight: '900',
    color: '#032B44',
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#032B44',
    padding: 15,
    borderRadius: 12,
    width: Dimensions.get('screen').width * 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },


});
export default AgencyLogin;











