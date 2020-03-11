import request from "./index"

/**
 * 封装商品详情请求
 */
export function getDetailData (params) {
    const { url, data } = params
    return request.get(url,{
        params:data || {}
    })
}