const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors=require("cors");
const pool=require("./pool")

var app = express();
app.use(cors({
  origin:['http://localhost:3001',"http://127.0.0.1:3001"],
  credentials:true
}))
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));//将服务器的session，放在req.session中
//使用路由器管理路由

//功能1:首页图片轮播
app.get("/imagelist",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/banner1.png"},
    {id:2,img_url:"http://localhost:3000/img/banner2.png"},
    {id:3,img_url:"http://localhost:3000/img/banner3.png"},
    {id:4,img_url:"http://localhost:3000/img/banner4.png"},
    {id:5,img_url:"http://localhost:3000/img/banner5.png"},
    {id:6,img_url:"http://localhost:3000/img/banner6.png"},
    {id:7,img_url:"http://localhost:3000/img/banner7.png"},
    {id:8,img_url:"http://localhost:3000/img/banner8.png"}
  ]
  res.send(obj);
})
//功能2:热门推荐的图片与文字
app.get("/onefirst",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/newone/01.jpg",img_url1:"http://localhost:3000/img/newone/02.jpg",text:"一个人在外漂泊,哪一刻让你很心酸"},
    {id:2,img_url:"http://localhost:3000/img/newone/02.jpg",img_url1:"http://localhost:3000/img/newone/03.jpg",text:"激情碰撞,震撼回响"},
    {id:3,img_url:"http://localhost:3000/img/newone/03.jpg",img_url1:"http://localhost:3000/img/newone/04.jpg",text:"乐享生活,再忙也要让自己放松一下"},
    {id:4,img_url:"http://localhost:3000/img/newone/04.jpg",img_url1:"http://localhost:3000/img/newone/05.jpg",text:"耳朵喜欢你,好听到可以单曲循环"},
    {id:5,img_url:"http://localhost:3000/img/newone/05.jpg",img_url1:"http://localhost:3000/img/newone/03.jpg",text:"耳朵喜欢你,好听到可以单曲循环"},
    // {id:6,img_url:"http://localhost:3000/img/newone/01.jpg",img_url1:"http://localhost:3000/img/newone/02.jpg",text:"耳朵喜欢你,好听到可以单曲循环"},
    // {id:7,img_url:"http://localhost:3000/img/newone/02.jpg",img_url1:"http://localhost:3000/img/newone/03.jpg",text:"耳朵喜欢你,好听到可以单曲循环"},
    // {id:8,img_url:"http://localhost:3000/img/newone/03.jpg",img_url1:"http://localhost:3000/img/newone/04.jpg",text:"耳朵喜欢你,好听到可以单曲循环"},
    // {id:9,img_url:"http://localhost:3000/img/newone/04.jpg",img_url1:"http://localhost:3000/img/newone/05.jpg",text:"耳朵喜欢你,好听到可以单曲循环"},
    // {id:10,img_url:"http://localhost:3000/img/newone/05.jpg",img_url1:"http://localhost:3000/img/newone/03.jpg",text:"耳朵喜欢你,好听到可以单曲循环"},
  ]
  res.send(obj);
})
//功能3:新碟首发的图片与文字
app.get("/twosecond",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/cover/01.jpg",title:"time after time",author:"MKJ"},
    {id:2,img_url:"http://localhost:3000/img/cover/02.jpg",title:"time after time",author:"MKJ"},
    {id:3,img_url:"http://localhost:3000/img/cover/03.jpg",title:"time after time",author:"MKJ"},
    {id:4,img_url:"http://localhost:3000/img/cover/04.jpg",title:"time after time",author:"MKJ"},
    {id:5,img_url:"http://localhost:3000/img/cover/05.jpg",title:"time after time",author:"MKJ"},
    {id:6,img_url:"http://localhost:3000/img/cover/01.jpg",title:"time after time",author:"MKJ"},
    {id:7,img_url:"http://localhost:3000/img/cover/02.jpg",title:"time after time",author:"MKJ"},
    {id:8,img_url:"http://localhost:3000/img/cover/03.jpg",title:"time after time",author:"MKJ"},
    {id:9,img_url:"http://localhost:3000/img/cover/04.jpg",title:"time after time",author:"MKJ"},
    {id:10,img_url:"http://localhost:3000/img/cover/05.jpg",title:"time after time",author:"MKJ"},
  ]
  res.send(obj);
})
//功能4:新歌首发的图片与文字 时间
app.get("/threeInfo",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/three/01.jpg",title:"那时的我们",author:"毛不易",time:"03:27"},
    {id:2,img_url:"http://localhost:3000/img/three/02.jpg",title:"1075",author:"胡彦斌",time:"03:57"},
    {id:3,img_url:"http://localhost:3000/img/three/03.jpg",title:"无底洞",author:"摩登兄弟",time:"04:00"},
    {id:4,img_url:"http://localhost:3000/img/three/04.jpg",title:"少年时",author:"侯明昊",time:"03:42"},
    {id:5,img_url:"http://localhost:3000/img/three/05.jpg",title:"天使",author:"王源",time:"05:00"},
    {id:6,img_url:"http://localhost:3000/img/three/06.jpg",title:"了不起的9%",author:"NINE PERCENT",time:"03:21"},
    {id:7,img_url:"http://localhost:3000/img/three/07.jpg",title:"湖山记",author:"霍尊",time:"03:56"},
    {id:8,img_url:"http://localhost:3000/img/three/08.jpg",title:"Chic Chili",author:"chili",time:"03:23"},
    {id:9,img_url:"http://localhost:3000/img/three/09.jpg",title:"For You",author:"高颖浠",time:"03:42"},
    {id:10,img_url:"http://localhost:3000/img/three/01.jpg",title:"那时的我们",author:"毛不易",time:"03:27"},
    {id:11,img_url:"http://localhost:3000/img/three/02.jpg",title:"1075",author:"胡彦斌",time:"03:57"},
    {id:12,img_url:"http://localhost:3000/img/three/03.jpg",title:"无底洞",author:"摩登兄弟",time:"04:00"},
    {id:13,img_url:"http://localhost:3000/img/three/04.jpg",title:"少年时",author:"侯明昊",time:"03:42"},
    {id:14,img_url:"http://localhost:3000/img/three/05.jpg",title:"天使",author:"王源",time:"05:00"},
    {id:15,img_url:"http://localhost:3000/img/three/06.jpg",title:"了不起的9%",author:"NINE PERCENT",time:"03:21"},
    {id:16,img_url:"http://localhost:3000/img/three/07.jpg",title:"湖山记",author:"霍尊",time:"03:56"},
    {id:17,img_url:"http://localhost:3000/img/three/08.jpg",title:"Chic Chili",author:"chili",time:"03:23"},
    {id:18,img_url:"http://localhost:3000/img/three/09.jpg",title:"For You",author:"高颖浠",time:"03:42"},
    
  ]
  res.send(obj);
})
//功能5:热门歌手
app.get("/topsinger",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/singer/01.jpg",author:"张惠妹"},
    {id:2,img_url:"http://localhost:3000/img/singer/02.jpg",author:"万晓利"},
    {id:3,img_url:"http://localhost:3000/img/singer/03.jpg",author:"陈奕迅"},
    {id:4,img_url:"http://localhost:3000/img/singer/04.jpg",author:"林俊杰"},
    {id:5,img_url:"http://localhost:3000/img/singer/05.jpg",author:"邓紫棋"},
  ]
  res.send(obj);
})

//功能6:mv
app.get("/mvinfo",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/four/01.jpg",img_url1:"http://localhost:3000/img/four/02.jpg",title:"等空车的人",author:"孟佳",count:1234},
    {id:2,img_url:"http://localhost:3000/img/four/02.jpg",img_url1:"http://localhost:3000/img/four/03.jpg",
    title:"采访",author:"法老",count:656},
    {id:3,img_url:"http://localhost:3000/img/four/03.jpg",img_url1:"http://localhost:3000/img/four/04.jpg",title:"在青春迷失的咖啡馆",author:"王心凌",count:5843},
    {id:4,img_url:"http://localhost:3000/img/four/04.jpg",img_url1:"http://localhost:3000/img/four/05.jpg",title:"알러뷰 (I LOVE YOU)",author:"EXID",count:6100},
    {id:5,img_url:"http://localhost:3000/img/four/05.jpg",img_url1:"http://localhost:3000/img/four/06.jpg",title:"少年时",author:"侯明昊",count:4701},
    {id:6,img_url:"http://localhost:3000/img/four/06.jpg",img_url1:"http://localhost:3000/img/four/07.jpg",title:"一念",author:"丁武",count:1261},
    {id:7,img_url:"http://localhost:3000/img/four/07.jpg",img_url1:"http://localhost:3000/img/four/08.jpg",title:"创新者",author:"NINE PERCENT",count:144.3},
    {id:8,img_url:"http://localhost:3000/img/four/08.jpg",img_url1:"http://localhost:3000/img/four/09.jpg",title:"那一夜",author:"邓紫棋",count:1234},
  ]
  res.send(obj);
})
//商品页
//1.轮播
app.get("/imglist",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/pb/01.jpg"},
    {id:2,img_url:"http://localhost:3000/img/pb/02.jpg"},
    {id:3,img_url:"http://localhost:3000/img/pb/03.jpg"},
    {id:4,img_url:"http://localhost:3000/img/pb/04.jpg"},
    {id:5,img_url:"http://localhost:3000/img/pb/05.jpg"},
    {id:6,img_url:"http://localhost:3000/img/pb/06.jpg"},
    
  ]
  res.send(obj);
})
//2.编辑推荐
// app.get("/recomList",(req,res)=>{
//   var obj=[
//     {id:1,img_url:"http://localhost:3000/img/pro1/01.jpg",title:"JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
//     {id:2,img_url:"http://localhost:3000/img/pro1/02.jpg",title:"JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
//     {id:3,img_url:"http://localhost:3000/img/pro1/03.jpg",title:"JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
//     {id:4,img_url:"http://localhost:3000/img/pro1/04.jpg",title:"JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
//     {id:5,img_url:"http://localhost:3000/img/pro1/05.jpg",title:"JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
//     {id:6,img_url:"http://localhost:3000/img/pro1/06.jpg",title:"JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
//     {id:7,img_url:"http://localhost:3000/img/pro1/07.jpg",title:"JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
//     {id:8,img_url:"http://localhost:3000/img/pro1/08.jpg",title:"JBL T120A 立体声入耳式耳机 手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
    
//   ]
//   res.send(obj);
// })
app.get('/recomList',(req,res)=>{
  var nid=req.query.nid;
  console.log(nid);
  var sql="SELECT * FROM wy_index_product where nid=?"
  pool.query(sql,[nid],(err,result)=>{
        if(err) console.log(err);
        
        res.writeHead(200,{
            //解决中文乱码
            "Content-Type":"application/json;charset=utf-8",//解决跨域请求
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));//将json数组转换为字符串格式
        res.send();
    })
})

app.get('/deList',(req,res)=>{
  var pid=req.query.pid;
  console.log(pid);
  var sql="SELECT * FROM wy_index_product where pid=?"
  pool.query(sql,[pid],(err,result)=>{
        if(err) console.log(err);
        
        res.writeHead(200,{
            //解决中文乱码
            "Content-Type":"application/json;charset=utf-8",//解决跨域请求
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));//将json数组转换为字符串格式
        res.send();
    })
})
//热门商品
app.get("/topList",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/pro2/01.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:2,img_url:"http://localhost:3000/img/pro2/02.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:3,img_url:"http://localhost:3000/img/pro2/03.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:4,img_url:"http://localhost:3000/img/pro2/04.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:5,img_url:"http://localhost:3000/img/pro2/05.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:6,img_url:"http://localhost:3000/img/pro2/06.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:7,img_url:"http://localhost:3000/img/pro2/07.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:8,img_url:"http://localhost:3000/img/pro2/08.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:9,img_url:"http://localhost:3000/img/pro2/01.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:10,img_url:"http://localhost:3000/img/pro2/02.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:11,img_url:"http://localhost:3000/img/pro2/03.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:12,img_url:"http://localhost:3000/img/pro2/04.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:13,img_url:"http://localhost:3000/img/pro2/05.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:14,img_url:"http://localhost:3000/img/pro2/06.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:15,img_url:"http://localhost:3000/img/pro2/07.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:16,img_url:"http://localhost:3000/img/pro2/08.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    {id:17,img_url:"http://localhost:3000/img/pro2/01.jpg",title:"漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机",price:"¥299"},
    
  ]
  res.send(obj);
})
//热门商品
app.get("/hotlist",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://localhost:3000/img/rimg/01.jpg",title:"JBL T120A 立体声入耳式耳机  手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
    {id:2,img_url:"http://localhost:3000/img/rimg/02.jpg",title:"网易云音乐2019年音乐人日历（单册减30,2册减60)年历、黑胶时光机",price:"¥158"},
    {id:3,img_url:"http://localhost:3000/img/rimg/03.jpg",title:"网易云音乐青春系列No.1音乐心针织帽",price:"¥55"},
    {id:4,img_url:"http://localhost:3000/img/rimg/04.jpg",title:"网易云音乐定制款W800X头戴式蓝牙耳机",price:"¥199"},
    {id:5,img_url:"http://localhost:3000/img/rimg/01.jpg",title:"JBL T120A 立体声入耳式耳机  手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",price:"¥128"},
    {id:6,img_url:"http://localhost:3000/img/rimg/02.jpg",title:"网易云音乐2019年音乐人日历（单册减30,2册减60)年历、黑胶时光机",price:"¥158"},
    {id:7,img_url:"http://localhost:3000/img/rimg/03.jpg",title:"网易云音乐青春系列No.1音乐心针织帽",price:"¥55"},
    {id:8,img_url:"http://localhost:3000/img/rimg/04.jpg",title:"网易云音乐定制款W800X头戴式蓝牙耳机",price:"¥199"},
  ]
  res.send(obj);
})


//详情页数据和图片
// app.get("/smlist",(req,res)=>{
//   var pid=req.query.pid;
//   console.log(pid);
//   var sql="SELECT * FROM wy_pic where id=?"
//   pool.query(sql,[id],(err,result)=>{
//         if(err) console.log(err);
        
//         res.writeHead(200,{
//             //解决中文乱码
//             "Content-Type":"application/json;charset=utf-8",//解决跨域请求
//             "Access-Control-Allow-Origin":"*"
//         })
//         res.write(JSON.stringify(result));//将json数组转换为字符串格式
//         res.send();
//     })
// })
//登录功能的实现
app.get("/signin",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    console.log(uname,upwd);
    pool.query(
        "select * from wy_user where uname=? and upwd=?",
        [uname,upwd],
        (err,result)=>{
          if(err) console.log(err);
          res.writeHead(200,{
             "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
          })
          if(result.length>0){
            var user=result[0];
            console.log(user);
            req.session.uid=user.uid //将用户id保存在session中
            console.log(req.session["uid"]);
            res.write(JSON.stringify({
              ok:1
            }))
          }else{
              res.write(JSON.stringify({
                  ok:0,
                  msg:"用户名或密码错误"
              }))
          }
          res.end();
        }
    )
})
//是否登录
// app.get("/islogin",(req,res)=>{
//   res.writeHead(200);
//   if(req.session.uid===undefined){
//       res.write(JSON.stringify({ok:0}))
//       res.end()
//     }else{
//    var uid=req.session.uid;
//    var sql="select * from wy_user where uid=?"
//    pool.query(sql,[uid],(err,result)=>{
//      if(err) console.log(err);
//      var user=result[0];
//      res.write(JSON.stringify({
//        ok:1,uname:user.uname
//      }))
//      res.end()
//    })
//   }
// })
//购物车功能
app.get("/shopList",(req,res)=>{
  var pid=req.query.pid;
  var count=req.query.count;
  var uid=req.session.uid;
  //console.log(pid,count,uid)
  //先要查询数据库中有没有购买的记录
  pool.query(
    "select * from wy_shoppingcart_item where uid=? and pid=?",[uid,pid],(err,result)=>{
      if(err) console.log(err)
      if(result.length==0){
        pool.query(
        "insert into wy_shoppingcart_item values(null,?,?,?,0)",[uid,pid,count],(err,result)=>{
          if(err) console.log(err);
          res.end();
         }
        )
      }else{
        pool.query(
        "update wy_shoppingcart_item set count=count+? where uid=? and pid=?",[count,uid,pid],(err,result)=>{
          if(err) console.log(err);
          res.end();
         }
        )
      }
      
    }
  )
  
})

//微信小程序水果数据与图片
app.get('/fruit',(req,res)=>{
  // var pid=req.query.pid;
  // console.log(pid); 
  var sql=" SELECT id, img_url,title,subtitle,price,sale FROM details"
  pool.query(sql,(err,result)=>{
        if(err) console.log(err);
        
        res.writeHead(200,{
            //解决中文乱码
            "Content-Type":"application/json;charset=utf-8",//解决跨域请求
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));//将json数组转换为字符串格式
        res.send();
    })
})

app.get('/details',(req,res)=>{
  var id=req.query.id;
  console.log(id);
  var sql="SELECT * FROM details where id=?"
  pool.query(sql,[id],(err,result)=>{
        if(err) console.log(err);
        
        res.writeHead(200,{
            //解决中文乱码
            "Content-Type":"application/json;charset=utf-8",//解决跨域请求
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));//将json数组转换为字符串格式
        res.send();
    })
})