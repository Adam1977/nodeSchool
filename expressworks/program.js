// 1、你好，世界
// --------------------我的答案-------------------------
// const express = require('express');
// const app = express()
// app.get('/home', function (req, res) {
//     res.end('Hello World!')
// })
// app.listen(process.argv[2])
// app.listen(3000)

// 2、静态文件
// --------------------我的答案-------------------------
// const express = require('express')
// const path = require('path')
// const app = express()
// // app.use(express.static('E:\\Adam\\nodeSchool\\expressworks' || path.join(__dirname, 'public')))
// app.use(express.static(path.join(process.argv[3])))
// app.listen(process.argv[2])
// // app.listen(3000)

// --------------------官方答案-------------------------
// const path = require('path')
// const express = require('express')
// const app = express()
// app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
// app.listen(process.argv[2])




