import axios from 'axios'

export  function request(config) {
   return new Promise((resolve,reject)=>{
       const instance = axios.create({
           baseURL:'http://123.207.32.32:8000/api/m3',
          // baseURL:'http://106.54.54.237:8000/api/h8',
           timeout:5000
       })
       instance.interceptors.request.use(config=>{
           return config
       }),
           instance.interceptors.response.use(data=>{
               return data
           })
       instance(config).then(res=>{
           resolve(res)
       }).catch(rej=>{
           reject(rej)
       })
   })

}