import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'
import xhr from '../core/xhr'
import { buildURL } from '../helpeers/url'
import { transformReqest, transformResponse } from '../helpeers/data'
import { processHeaders } from '../helpeers/headers'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.headers = transformHeaders(config)
  config.url = transformURL(config)
  config.data = transformReqestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformReqestData(config: AxiosRequestConfig): any {
  return transformReqest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
