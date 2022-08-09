// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, StyleSheet} from 'react-native';
import { Formik } from 'formik';

export const Register = props => (
  <Formik     
    initialValues={{email:"" ,userName:"" , password:""}}
    onSubmit={values => console.log(values)}>
      
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      
      <View>
        
        <TextInput style={styles.TextInput}
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
         <TextInput style={styles.TextInput}
          placeholder="username"
          onChangeText={handleChange('userName')}
          onBlur={handleBlur('userName')}
          value={values.userName}
        />
         <TextInput style={styles.TextInput}
         placeholder="password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />
        <Button onPress={handleSubmit} title="Submit" />

      </View>
      
    )}
  </Formik>
  
);


const styles = StyleSheet.create({
  TextInput:{
    border:"solid 1px grey",
    padding:"2px",
    margin:"2px"
  },
  // container:{
  //   justifyContent:"center"
  // }
})











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