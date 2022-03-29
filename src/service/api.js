/* api.js */
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'
const api = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

    get: (url, params) => {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            })
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    post: (url, params) => {
        // return new Promise((resolve, reject) => {
            axios.post(url,params)//JSON.stringify(params)
                .then((response) => {
                    console.log(response.data)
                    return response.data
                    // resolve(response.data)
                })
                .catch((error) => {
                    // reject(error)
                    console.log('error')
                    console.log(error)
                })
        // })
    },

    put: (url, params) => {
        return new Promise((resolve, reject) => {
            axios.put(url, params)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },


    delete: (url) => {
        return new Promise((resolve, reject) => {
            axios.delete(url)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

export default api

// export function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//             params: params
//         })
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 reject(err.data)
//             })
//     })
// }

// // post

// export function post(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, JSON.stringify(params)) // 用QS套件則是 QS.stringify(params)    
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 reject(err.data)
//             })
//     })
// }