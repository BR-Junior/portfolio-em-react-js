import axios from 'axios'


// const getUser = async (id:string) =>{
//     try{
//         const response:any = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//         const {data} = response
//         return data
//     }catch (error) {
//         console.log("error getUser: ", error)
//     }
// }

const getUserOne = async (id:string) =>{
    try{
    const response:any = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const {data} = response
    return data
    }catch (error) {
    console.log("error getUser: ", error)
    }
}
const getUserAll = async () =>{
    try{
    const response:any = await axios.get('https://jsonplaceholder.typicode.com/users/')
    const {data} = response
    return data
    }catch (error) {
    console.log("error getUser: ", error)
    }
}
    

export  { getUserOne, getUserAll }

// exemplo de chamada
// import { getUser, getUserAll } from '../../assets/axios/axios'
// {
//     const user = await getUser('5')

//     console.log( user.name, user.id)
        // const data = await getUserAll()
        // const userAll = [...data]
        // console.log(userAll.find)
// }