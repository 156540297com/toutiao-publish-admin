/**
 * 基于axios封装的请求模块
 */ 
import axios from 'axios'

//创建一个axios实例,也就是复制一个axios
//请求通过这个实例发请求,把需要的配置配置给给个实例来处理
const request = axios.create({
  baseURL: 'http://ttapi.research.itcas.cn/' // 请求的基础路径
})

// axios({
//     method: '',
//     url: ''
// })

// 导出请求方法
export default request

// 谁要使用谁就加载 request 模块
import request from 'request.js'