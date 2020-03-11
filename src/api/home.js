import request from "./index"

/**
 * 封装首页轮播图请求
 */
export function getbannerlist (params) {
    const { url } = params
    return new Promise((resolve,reject) =>{
        request({
            url,
            methods:"GET",
        }).then(res =>{
            resolve(res.data.data)
        }).catch(error =>{
            reject(error)
        })
    })
}

/**
 * 封装首页列表请求
 */
export function getprolist (params) {
    const { url, data } = params
    return request.get(url,{
        params:data || {}
    })
}