import { useFormik } from 'formik'
import React from 'react'
import { Button, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export const Login =({navigation}) =>{

  const formData = new FormData()
  const Formik = useFormik({
    initialValues:{
      username:"",
      password:""
    },
    onSubmit:values=>{
      console.log(JSON.stringify(values))
      console.log(values)
  } 
  })


  return (
    <View>
    <form onSubmit={Formik.handleSubmit}> 
  
       <input
         id="username"
         name="username"
         type="text"
         onChange={Formik.handleChange}
         value={Formik.values.username}
         
       />
       <input
         id="password"
         name="password"
         type="password"
         onChange={Formik.handleChange}
         value={Formik.values.password}
         
       />

        <button type='submit' onClick={Formik.handleSubmit}>Register</button>
        <button onClick={()=>navigation.navigate("Register")}>Login</button>
       </form>
       </View>
  )
}
