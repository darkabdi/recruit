import { useFormik } from 'formik'
import React from 'react'
import { Button, View } from 'react-native'

export const Login =() =>{
  let listOfUsers = []
  const formData = new FormData()
  const Formik = useFormik({
    initialValues:{
      username:"",
      email:"",
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

        <button onClick={Formik.handleSubmit}>Login</button>
       </form>
       </View>
  )
}
