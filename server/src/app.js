const express = require('express')
const app = express()
const port = 5000

// 暂时用假数据
let allCandidateGender = ['1', '1', '1', '1', '1', '1', '1', '1', 
                          '1', '1', '1', '1', '1', '1', '1', '1',
                          '2', '2', '2', '2', '2', '2', '2', '2', 
                          '2', '2', '2', '2', '2', '2', '2', '2']
let allCandidateAge = ['1', '1', '1', '1', '2', '2', '2', '2',
                       '3', '3', '3', '3', '4', '4', '4', '4',
                       '1', '1', '1', '1', '2', '2', '2', '2',
                       '3', '3', '3', '3', '4', '4', '4', '4']
let allCandidateNames = ['刘昊然', '吴磊', '荷兰弟', '易烊千玺', '韦东奕', '张一山', '张昆玮', '邓伦',
                         '胡歌', '王思聪', '扎克伯格', '张一鸣', '马斯克', '马化腾', '克里斯·埃文斯', '刘强东',
                         '关晓彤', '张雪迎', '张子枫', '宋祖儿', '迪丽热巴', '周冬雨', '杨紫', '鞠婧祎',
                         '赵丽颖', '杨幂', '李沁', '宗馥莉', '李飞飞', '颜宁', '杨惠妍', '周迅']
let allCandidatePhotos = ['../photos/liuhaoran.jpg', '../photos/wulei.jpg', '../photos/holland.jpg', '../photos/yiyangqianxi.jpg', '../photos/weidongyi.jpg', '../photos/zhangyishan.jpg', '../photos/zhangkunwei.jpg', '../photos/denglun.jpg',
                          '../photos/huge.jpg','../photos/wangsicong.jpg', '../photos/zuckerburg.jpg', '../photos/zhangyiming.jpg', '../photos/musk.jpg', '../photos/tonyma.jpg', '../photos/chris.jpg', '../photos/liuqiangdong.jpg',
                          '../photos/guanxiaotong.jpg', '../photos/zhangxueying.jpg', '../photos/zhangzifeng.jpg', '../photos/songzuer.jpg', '../photos/dilireba.jpg', '../photos/zhoudongyu.jpg', '../photos/yangzi.jpg', '../photos/jujingyi.jpg',
                          '../photos/zhaoliying.jpg', '../photos/yangmi.jpg', '../photos/liqin.jpg', '../photos/zongfuli.jpg', '../photos/lifeifei.jpg', '../photos/yanning.jpg', '../photos/yanghuiyan.jpg', '../photos/zhouxun.jpg']
let allCandidateInfo = ['刘昊然，本名刘源，1997年10月10日生于河南省平顶山，中国内地男演员。', '吴磊，1999年12月26日出生于上海，祖籍四川广安，中国内地影视男演员，就读于北京电影学院。', '汤姆·赫兰德（Tom Holland），1996年6月1日出生于英国英格兰泰晤士河畔金斯顿，英国男演员。', '易烊千玺，2000年11月28日生于湖南怀化，中国内地男演员、歌手、舞者，演唱组合TFBOYS成员，就读于中央戏剧学院。', 
                        '韦东奕，北京大学助理教授，北京大学数学科学学院微分方程教研室研究员。', '张一山，1992年5月5日出生于北京市西城区，毕业于北京电影学院，中国内地男演员。', '一年以来，我倒是收入增加了不少，而今成了一个斜杠青年，教竞赛，写程序，月入五万，每天依然是从早忙到晚，不过比从前在谷歌写C++，做大数据的时候轻松多了。官方职业依然是在家乡一个不知名的二本教书。', '邓伦，1992年10月21日出生于河北省石家庄市，中国内地影视男演员，毕业于上海戏剧学院表演系。',
                        '胡歌，1982年9月20日出生于上海市徐汇区，中国内地影视男演员、流行乐歌手，民盟盟员，毕业于上海戏剧学院表演系。', '王思聪，1988年1月3日出生于辽宁省大连市，祖籍四川省苍溪县，毕业于伦敦大学学院哲学系，万达集团董事长王健林的独子，北京普思投资有限公司董事长、IG电子竞技俱乐部创始人、万达集团董事。', '马克·艾略特·扎克伯格（英文：Mark Elliot Zuckerberg），1984年5月14日生于美国纽约州白原市，社交网站Facebook（脸书）的创始人兼首席执行官，被人们冠以“第二盖茨”的美誉。', '张一鸣，男，1983年出生于福建省龙岩市永定区，客家人，2005年毕业于南开大学软件工程专业，北京字节跳动科技有限公司创始人、原CEO，今日头条创始人、原CEO。', 
                        '埃隆·马斯克（Elon Musk），1971年6月28日出生于南非的行政首都比勒陀利亚（现名：茨瓦内），企业家、工程师、慈善家。', '马化腾，汉族，1971年10月29日生于广东省东方县八所港（今属海南省东方市），祖籍广东省汕头市潮南区，1993年获深圳大学理学学士学位。腾讯公司主要创办人之一。现任腾讯公司董事会主席兼首席执行官；全国青联副主席；全国人大代表。', '克里斯·埃文斯（Chris Evans），1981年6月13日出生于美国马萨诸塞州波士顿，美国演员、导演。', '刘强东，男，汉族，1974年2月14日生，江苏宿迁人，祖籍湖南湘潭，京东集团董事局主席兼首席执行官，本科毕业于中国人民大学，民建会员，河北省阜平县平石头村名誉村主任。',
                        '关晓彤，1997年9月17日出生于北京市，中国内地影视女演员、歌手。', '张雪迎，1997年6月18日出生于浙江省金华市义乌市，中国内地女演员，毕业于中央戏剧学院。', '张子枫，2001年8月27日出生于河南省三门峡市，中国内地女演员，就读于北京电影学院。', '宋祖儿，原名孙凡清，1998年5月23日出生于天津市，中国内地影视女演员，就读于北京电影学院。', 
                        '迪丽热巴（Dilraba），1992年6月3日出生于新疆乌鲁木齐市，中国内地影视女演员、歌手，毕业于上海戏剧学院。', '周冬雨，1992年1月31日出生于河北省石家庄市，毕业于北京电影学院2011级本科班，中国内地影视女演员。', '杨紫，1992年11月6日出生于北京市，毕业于北京电影学院2010级表演系本科班，中国内地影视女演员。', '鞠婧祎（Kiku），1994年6月18日出生于四川省遂宁市，中国内地影视女演员、流行乐歌手。',
                        '赵丽颖，1987年10月16日出生于河北省廊坊市，中国内地影视女演员。', '杨幂，1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', '李沁，1990年9月27日出生于江苏省苏州市昆山市巴城镇，中国内地影视女演员。', '宗馥莉，女，生于1982年1月15日，2007年成立杭州宏胜饮料集团有限公司并出任总裁。', 
                        '李飞飞，女，1976年出生于中国北京，美国国家工程院院士、美国国家医学院院士、美国艺术与科学院院士，美国斯坦福大学首位红杉讲席教授，以人为本人工智能研究院（HAI）院长，AI4ALL联合创始人及主席，Twitter公司董事会独立董事 。', '颜宁，女，1977年11月出生于山东章丘，结构生物学家，美国国家科学院外籍院士、美国艺术与科学院院士，美国霍华德休斯医学研究所首届“国际青年科学家”，美国普林斯顿大学教授、博士生导师，清华大学生命科学学院兼职教授。', '杨惠妍，1981年出生，女，广东顺德人，美国俄亥俄州立大学市场及物流系毕业，文学学士学位，现任碧桂园联席主席、博实乐教育控股有限公司董事长、国强公益基金会荣誉会长。', '周迅，1974年10月18日出生于浙江省衢州市，华语影视女演员、歌手，毕业于浙江艺术学校。']

let candidateNames = ['刘昊然', '王思聪', '迪丽热巴', '宋祖儿']
let candidatePhotos = ['../photos/liuhaoran.jpg', '../photos/wangsicong.jpg', '../photos/dilireba.jpg', '../photos/songzuer.jpg']
let candidateInfo = ['刘昊然，本名刘源，1997年10月10日生于河南省平顶山，中国内地男演员。', '王思聪，1988年1月3日出生于辽宁省大连市，祖籍四川省苍溪县，毕业于伦敦大学学院哲学系，万达集团董事长王健林的独子，北京普思投资有限公司董事长、IG电子竞技俱乐部创始人、万达集团董事。', '迪丽热巴（Dilraba），1992年6月3日出生于新疆乌鲁木齐市，中国内地影视女演员、歌手，毕业于上海戏剧学院。', '宋祖儿，原名孙凡清，1998年5月23日出生于天津市，中国内地影视女演员，就读于北京电影学院。']

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