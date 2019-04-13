import request from '@/api/core'

export function getSystemLog (timeStamp, from) {
  return request('/getSystemLog', {timeStamp, from}, 'GET')
}

export function createTask (iTaskType) {
  return request('/createTask', {iTaskType}, 'GET')
}

export function executeTask (sTaskCode, iTaskType, param) {
  // TODO 添加参数
  return request('/executeTask', {sTaskCode, iTaskType}, 'GET')
}

export function getTaskProgress (iTaskType, sTaskCode, from) {
  return request('/getTaskProgress', {iTaskType, sTaskCode, from}, 'GET')
}

export function getSystemParameter () {
  return request('/getSystemParameters', {}, 'GET')
}

export function changeSystemParameter (data) {
  return request('/changeSystemParameters', {data}, 'GET')
}
