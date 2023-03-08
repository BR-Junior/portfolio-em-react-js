import axios from 'axios'

const API_KEY = "b32e3409287920d92c9363a89de42afd";
const categorias = [
    {
        nome: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true,
    },
    {
        nome: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false,
    },
    {
        nome: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        nome: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false,
    },
    {
        nome: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`,
        isLarge: false,
    },
    {
        nome: "documentaries",
        title: "Documentário",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,
    }

];

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