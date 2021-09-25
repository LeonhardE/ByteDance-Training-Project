const express = require('express')
const app = express()
const port = 5000

let allCandidateNames = ['a', 'b', '小明', 'Lucy', 'John', '翠花']
let allCandidateGender = ['2', '1', '1', '2', '1', '2']
let allCandidateAge = ['1', '2', '3', '4', '2', '1']
let allCandidatePhotos = ['c', 'd', 'e', 'f', 'g', 'h']
let allCandidateInfo = ['e', 'f', 'g', 'h', 'i', 'j']

let candidateNames = ['a']
let candidatePhotos = ['b']
let candidateInfo = ['c']

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.all('*', function (req, res, next) {
  // 解决跨域访问的问题
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  // 允许请求资源的方式
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})


app.get('/', (req, res) => {
  res.send('UPC后台系统')
})

app.get('/retriveInfo', function(req, res) {
  // 获取默认推荐人信息
  var data = {
    code: 200,
    msg: 'OK',
    data: {
      retrived_names: candidateNames,
      retrived_photos: candidatePhotos,
      retrived_info: candidateInfo
    }
  }
  res.json(data)
})

app.post('/setproperty', (req, res) => {
  // 根据选择的性别和年龄更新推荐信息
  console.log("req", req.body)
  // console.log(req.body.gender)
  // console.log(req.body.age)
  if (req.body.gender !== '0' && req.body.age !== '0') {
    candidateNames = []
    candidatePhotos = []
    candidateInfo = []
    let targetgender = req.body.gender === '1' ? '2' : '1'
    for (let i = 0; i < allCandidateNames.length; i++) {
      if (allCandidateGender[i] === targetgender && allCandidateAge[i] === req.body.age) {
        candidateNames.push(allCandidateNames[i])
        candidatePhotos.push(allCandidatePhotos[i])
        candidateInfo.push(allCandidateInfo[i])
      }
    }
  }
  res.send('数据已接收')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;