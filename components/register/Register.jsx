import { useFormik } from 'formik'
import React from 'react'
import { Button, View } from 'react-native'

export const Register =({navigation}) =>{
  // let listOfUsers = []
  // const formData = new FormData()
 
  const Formik = useFormik({
    initialValues:{
      username:"",
      email:"",
      password:""
    },
    onSubmit:values=>{
      console.log(JSON.stringify(values))
      console.log(values)
      navigation.navigate("Login",{values})
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
         id="email"
         name="email"
         type="text"
         onChange={Formik.handleChange}
         value={Formik.values.email}
       />
       <input
         id="password"
         name="password"
         type="text"
         onChange={Formik.handleChange}
         value={Formik.values.password}
       />
        <button onClick={Formik.handleChange}>Register</button>
       </form>
    
       </View>
  )
}










// import React from 'react'
// import { useState } from 'react'
// import { StyleSheet, Text, View } from 'react-native';
// import { Button } from 'react-native';

// export default function input(props) {
// const [user, setUser] = useState("")
// const [pwd, setPwd] = useState("")
// // const [show,setShow]= useState(false)
// // let displayShit = ()=>{
// // return <h1>välkommen {user}</h1>
// // }
// // console.log(user)
// // console.log(pwd)

//   return (
//     <div>
//         <form >
//         <input onChange={e=>setUser(e.target.value)} type="text" value={user} name="user" id="user" />
//         <input onChange={e=>setPwd(e.target.value)} autoComplete="current-pasword" type="password" value={pwd} name="pwd" id="pwd" />
//         </form>

  
        
//     </div>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       display:'flex',
//       justifyContent: "spaceBetween",
//       alignItems:"stretch"  ,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
    
//   });