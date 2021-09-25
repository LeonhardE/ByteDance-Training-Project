const express = require('express')
const app = express()
const port = 5000
const multiparty = require('multiparty')

let candidateNames = ['a']
let candidatePhotos = ['b']
let candidateInfo = ['c']

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.all('*', function (req, res, next) {
  // 解决跨域访问的问题
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // 允许请求资源的方式
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})


app.get('/', (req, res) => {
  res.send('UPC后台系统')
})

app.get('/defaultinfo', function(req, res){
  // 获取默认推荐人信息
  var data = {
    code: 200,
    msg: 'OK',
    data: {
      default_names: candidateNames,
      default_photos: candidatePhotos,
      default_info: candidateInfo
    }
  }
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;