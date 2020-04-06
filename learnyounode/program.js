// 1、你好，世界
// console.log("HELLO WORLD")

// 2、婴儿学步
// ------------------我的答案---------------
// console.log(process.argv)
// let processArray = process.argv
// if (processArray.length > 2) {
//     let total = 0
//     for (let i = 2; i < processArray.length; i++) {
//         total += Number(processArray[i])
//     }
//     console.log(total)
// }
// ------------------官方答案---------------
// let result = 0
// for (let i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i])
// }
// console.log(result)

// 3、第一个I/O
// ------------------我的答案(本地----最后一行无回车)---------------
// const fs = require('fs');
// 本地
// let readData = fs.readFileSync('E:\\Adam\\nodeSchool\\learnyounode\\file.txt');
// 程序
// let readData = fs.readFileSync(process.argv[2]);
// let row = readData.toString().split('\n').length - 1;
// console.log(row)

// ------------------官方答案（最后一行有回车，通过process.argv[2]获取测试用例）---------------
// const fs = require('fs')
// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// 只要把 'utf8' 作为 readFileSync 的第二个参数传入
// 就可以不用 .toString() 来得到一个字符串
//
// const lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
// console.log(lines)

// 4、第一个异步I/O
// ------------------我的答案---------------
// const fs = require('fs')
// fs.readFile(process.argv[2], 'utf-8', function (err, data) {
//     console.log(data.split('\n').length - 1)
// })
// ------------------官方答案---------------
// const fs = require('fs')
// const file = process.argv[2]
// fs.readFile(file, function (err, contents) {
//     if (err) {
//         return console.log(err)
//     }
//     // 你也可以使用 fs.readFile(file, 'utf8', callback)
//     Buffer toString()方法
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)
// })

// 5、LS过滤器
// ------------------我的答案---------------
// const fs = require('fs');
// const path = require('path');
// // fs.readdir('E:\\Adam\\nodeSchool\\learnyounode', (err, list) => {
// fs.readdir(process.argv[2], (err, list) => {
//     for(let i = 0; i < list.length; i++) {
//         if (path.extname(list[i]) === '.' + process.argv[3]) {
//             console.log(list[i])
//         }
//     }
// })
// ------------------官方答案----------------
// const fs = require('fs')
// const path = require('path')
// const folder = process.argv[2]
// const ext = '.' + process.argv[3]
// fs.readdir(folder, function (err, files) {
//     if (err) return console.error(err)
//     files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//             console.log(file)
//         }
//     })
// })

// 6、使其模板化
// ------------------我的答案---------------
// const mymodule = require('./mymodule')
// mymodule(process.argv[2], process.argv[3], function(error, data) {
//     data.forEach(file => {
//         console.log(file)
//     })
// })
// ------------------官方答案----------------
// const filterFn = require('./mymodule')
// const dir = process.argv[2]
// const filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//     if (err) {
//         return console.error('There was an error:', err)
//     }
//     list.forEach(function (file) {
//         console.log(file)
//     })
// })

// 7、HTTP客户端
// ------------------我的答案---------------
// const http = require('http');
// http.get(process.argv[2], function (res) {
//     // 方法一
//     // res.setEncoding('utf8');
//     // res.on('data', data => {
//     //     console.log(data)
//     // })
//     //   方法二
//     res.on('data', data => {
//         console.log(data.toString())
//     })
// })
// ------------------官方答案----------------
// const http = require('http')
// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
// }).on('error', console.error)

// 8、HTTP收集器
// ------------------我的答案---------------
// const http = require('http')
// const bl = require('bl')
// http.get(process.argv[2], response => {
//     response.pipe(bl(function (err, data) {
//         console.log(data.length)
//         console.log(data.toString())
//     }))
// })
// ------------------官方答案----------------
// const http = require('http')
// const bl = require('bl')
// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//         if (err) {
//             return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
// })

// 9、玩转异步
// ------------------我的答案---------------
// const http = require('http');
// const bl = require('bl');
// let processArgv = process.argv
// function getResponse(url) {
//     return new Promise(function (resolve) {
//         http.get(url, function (response) {
//             // 第一种
//             // response.setEncoding('utf8')
//             // let resData = ''
//             // response.on('data', data => {
//             //     resData += data
//             // })
//             // response.on('end', () => {
//             //     console.log(resData)
//             //     resolve()
//             // })
//             // 第二种
//             response.pipe(bl((err, data) => {
//                 console.log(data.toString())
//                 resolve()
//             }))
//         })
//     })
// }
// getResponse(processArgv[2]).then(() => {
//     getResponse(processArgv[3]).then(() => {
//         getResponse(processArgv[4])
//     })
// })
// ------------------官方答案----------------
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0
// function printResults () {
//     for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//     }
// }
// function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err) {
//                 return console.error(err)
//             }
//             results[index] = data.toString()
//             count++
//             if (count === 3) {
//                 printResults()
//             }
//         }))
//     })
// }
// for (let i = 0; i < 3; i++) {
//     httpGet(i)
// }

// 10、授时服务器
// ------------------我的答案---------------
// const net = require('net')
// function getNumber(par) {
//     if (par < 10) {
//         return '0' + par
//     } else {
//         return par
//     }
// }
// const server = net.createServer(function (socket) {
//     let date = new Date();
//     let fullYear = date.getFullYear().toString(),
//         month = date.getMonth() + 1,
//         day = date.getDate(),
//         hour = date.getHours(),
//         minutes = date.getMinutes();
//     month = getNumber(month)
//     day = getNumber(day)
//     hour = getNumber(hour)
//     minutes = getNumber(minutes)
//     let time = fullYear + '-' + month + '-' + day + ' ' + hour + ':' + minutes
//     socket.end(time + '\n')
// })
// server.listen(Number(process.argv[2]))
// ------------------官方答案----------------
// const net = require('net')
// function zeroFill (i) {
//     return (i < 10 ? '0' : '') + i
// }
// function now () {
//     const d = new Date()
//     return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
// }
// const server = net.createServer(function (socket) {
//     socket.end(now() + '\n')
// })
// server.listen(Number(process.argv[2]))

// 11、HTTP文件服务器
// ------------------我的答案---------------
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer(function (req, res) {
//     fs.createReadStream(process.argv[3]).pipe(res)
// })
// server.listen(Number(process.argv[2]))
// ------------------官方答案----------------
// const http = require('http')
// const fs = require('fs')
// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })
//     fs.createReadStream(process.argv[3]).pipe(res)
// })
// server.listen(Number(process.argv[2]))

// 12、HTTP大写转换器
// ------------------我的答案---------------
// const map = require('through2-map');
// const http = require('http');
// const server = http.createServer(function (req, res) {
//     req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//     })).pipe(res)
// })
// server.listen(Number(process.argv[2]))
// ------------------官方答案----------------
// const http = require('http')
// const map = require('through2-map')
// const server = http.createServer(function (req, res) {
//     if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//     }
//     req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//     })).pipe(res)
// })
// server.listen(Number(process.argv[2]))

// 13、HTTP JSON API服务器
// ------------------我的答案---------------
// ------------------官方答案----------------
const http = require('http')
function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}
function unixtime (time) {
    return { unixtime: time.getTime() }
}
const server = http.createServer(function (req, res) {
    const parsedUrl = new URL(req.url, 'http://example.com')
    const time = new Date(parsedUrl.searchParams.get('iso'))
    let result
    if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))


