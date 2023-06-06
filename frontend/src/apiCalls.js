import axios from "axios"

export const logincall = async(userCredentials,dispatch)=>{
dispatch({type:'LOGIN_START'})
try{
    const res = await axios.post('http://localhost:8800/api/auth/login' ,userCredentials )
     dispatch({type:'LOGIN_SUCCESS', payload: res.data})
}catch(error){
    dispatch({type:'LOGIN_FAILURE', payload: error})

}
}
// export const Registercall = async(data)=>{

// try{
//     const res = await axios.post('http://localhost:8800/api/auth/register' ,data )
//      console.log('User Registered Successfully', res)
// }catch(error){
//    console.log('Error While Registering', error)

// }
// }