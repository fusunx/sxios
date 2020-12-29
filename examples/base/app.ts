import axios from "../../src/index";

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: ['bar', 'baz']
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: {
//             bar: 'baz'
//         }
//     }
// })

// const date = new Date()

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         date
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: '@:$'
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: 'boo',
//         baz: null
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get#hash',
//     params: {
//         foo: 'boo'
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get?foo=bar',
//     params: {
//         bar: 'baz'
//     }
// })

axios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 2,
        b: 3
    }
}).then(res => {
    console.log(res);
    
})

const arr = new Int32Array([21, 33])

axios({
    method: 'post',
    url: '/base/buffer',
    data: arr
})

axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
    },
    data: {
        a: 2,
        b: 3
    }
}).then(res => {
    console.log(res);
    
})