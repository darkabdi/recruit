import { useFormik } from 'formik'
import React from 'react'
import { Button } from 'react-native'

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
   
     listOfUsers.push(values)
     console.log(listOfUsers)
    }

  })
  return (
    <form onSubmit={Formik.handleSubmit}> 
      
       <input
         id="username"
         name="username"
         type="text"
         onChange={Formik.handleChange}
         value={Formik.values.firstName}
       />
        <Button onPress={Formik.handleSubmit} title="Submit" />
       </form>
  )
}
