// ------------------我的答案----------------
// module.exports = function (a, b, callback) {
//     const fs = require('fs')
//     const path = require('path')
//     const folder = a
//     const ext = '.' + b
//     fs.readdir(folder, function (err, files) {
//         if (err) return callback(err)
//         const fileData = []
//         files.forEach(function (file) {
//             if (path.extname(file) === ext) {
//                 fileData.push(file)
//             }
//         })
//         return callback(null, fileData)
//     })
// }

// ------------------官方答案----------------
const fs = require('fs')
const path = require('path')
module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err)
        }
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })
        callback(null, list)
    })
}
