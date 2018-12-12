<template>
  <div class="wy-app">
    <div class="header-main">
      <div class="header-bg" id="header-bg">
          <div class="header" id="header">
              <div class="logo">
                  <a href="#" class="logo-img"></a>
              </div>
              <div>
                  <ul class="first-nav">
                      <li class="first-active">发现音乐</li>
                      <li>我的音乐</li>
                      <li>朋友</li>
                      <li><router-link to="/" class="city">商城</router-link></li>
                      <li>音乐人</li>
                      <li>下载客户端</li>
                  </ul>
              </div>
              <div class="btn-search">
                  <input type="text" class="search" placeholder="音乐/电台/用户">
              </div>
              <div class="video">
                  <a href="#">视频投稿</a>
              </div>
               <div class="login">
                <a href="#" class="btn-login">登录</a>
              </div> 
              
          </div>
      </div>
      <!--二层导航栏-->
      <div class="nav-bg" id="nav-bg">
          <div class="nav" id="nav">
              <ul>
                  <li><a href="#" class="nav-active">推荐</a></li>
                  <li><a href="#">歌单</a></li>
                  <li><a href="#">排行榜</a></li>
                  <li><a href="#">主播电台</a></li>
                  <li><a href="#">歌手</a></li>
                  <li><a href="#">新碟上架</a></li>
              </ul>
          </div>
      </div>
    </div>
    <!--轮播图-->
    <div class="banner-wrap">
        <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in list" :key="item.id">
            <img :src="item.img_url">
        </el-carousel-item>
        </el-carousel>
    </div>
    <!--1.新碟首发-->
    <div class="main">
        <div class="newsone">
          <div class="oneFirst">
            <div class="oneTitle">
                <span>新 碟 首 发</span>
                <div class="oneDetails">
                    <a href="#">内地</a>
                    <a href="#">港台</a>
                    <a href="#">欧美</a>
                    <a href="#">韩国</a>
                    <a href="#">日本</a>
                    <a href="#">其他</a>
                </div>
            </div>
        </div>
            <div class="twoSecond" id="div1">
              <div id="div4">
                <ul class="secondWrap" id="div2">
                    <li class="newwrap" v-for="item in twoList" :key="item.id">
                        <div class="onrwrap">
                        <img class="wrapimg" :src="item.img_url">
                        <!--<a href="#" class="wrapmask"></a>-->
                        </div>
                        <p class="wraptitle">{{item.title}}<a href="#"></a></p>
                        <p class="wrapauthor">{{item.author}}<a href="#"></a></p>
                    </li>
                </ul>
                <div id="div3"></div>
              </div>
            </div>
        </div>
    <!--2.热门推荐-->
        <div class="newsone">
            <div class="oneFirst">
            <div class="oneTitle">
                <span>热 门 推 荐</span>
                <div class="oneDetails">
                    <a href="#">为你推荐</a>
                    <a href="#">90年代</a>
                    <a href="#">民谣</a>
                    <a href="#">日韩</a>
                    <a href="#">情歌</a>
                    <a href="#">网络歌曲</a>
                </div>
            </div>
            </div>
            <div class="oneSecond">
                <ul class="secondImg">
                    <li v-for="item in oneList" :key="item.id" class="imgdetails">
                        <div class="btn">
                        <img :src="item.img_url">
                        <div class="play-btn"></div>
                        </div>
                        <div class="secondTxt">
                            <p>{{item.text}}</p>
                        </div>
                        <p class="count"><span>播放量321.5万</span></p>
                    
                    </li>
                </ul>
            </div>
        </div>
    <!--3.新歌首发-->
        <div class="newsone">
            <div class="oneFirst">
            <div class="oneTitle">
                <span>新 歌 首 发</span>
                <div class="oneDetails">
                    <a href="#">内地</a>
                    <a href="#">港台</a>
                    <a href="#">欧美</a>
                    <a href="#">韩国</a>
                    <a href="#">日本</a>
                    <a href="#">其他</a>
                </div>
            </div>
            </div>
            <div class="threesecond">
                <ul class="threewrap">
                    <li class="timewrap" v-for="item in threeList" :key="item.id">
                        <div class="threeImg">
                            <img :src="item.img_url">
                            <div class="play-btn"></div>
                        </div>
                        <div class="threetxt">
                            <a href="#" class="threetitle">{{item.title}}</a>
                            <a href="#" class="threeauthor">{{item.author}}</a>
                        </div>
                        <p class="threetime">{{item.time}}</p>
                    </li>
                </ul>
            </div>
        </div>
    <!--MV-->
        <div class="newsone">
            <div class="oneFirst">
            <div class="oneTitle">
                <span>M V</span>
                <div class="oneDetails">
                    <a href="#">精选</a>
                    <a href="#">内地</a>
                    <a href="#">韩国</a>
                    <a href="#">港台</a>
                    <a href="#">欧美</a>
                    <a href="#">日本</a>
                </div>
            </div>
            </div>
            <div class="fourmain">
                <ul class="fourwrap">
                    <li class="mainwrap" v-for="item in fourList" :key="item.id">
                        <div class="fourImg">
                            <img :src="item.img_url">
                            <div class="play-btn"></div>
                        </div>
                        <div class="fourtxt">
                        <p class="secondTxt">{{item.title}}</p>
                        <p class="count1"><span>{{item.author}}</span></p>
                        <p class="count1"><span>{{item.count}}</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer1">
          <div class="left">
              <ul class="info">
                  <li><a href="#">关于网易</a></li>
                  <li><a href="#">客户服务</a></li>
                  <li><a href="#">服务条款</a></li>
                  <li><a href="#">网站导航</a></li>
                  <li><a href="#">意见反馈</a></li>
              </ul>
              <div class="copyright">
                  <span>网易公司版权所有@1997-2018</span>
                  <span>杭州乐读科技有限公司运营 :</span>
                  <a href="#">浙网文[2018]3506-263号</a>
              </div>
              <div class="copyright">
                  <span>违法和不良信息举报电话 : 0571-89853516</span>
                  <span>举报邮箱 : </span>
                  <a href="#">cloudmusicservice@163.com</a>
              </div>
          </div>
          <div class="right">
              <ul class="rig-list">
                  <li><a href="#" class="rightImg rightImg1"></a><span>独立音乐人</span></li>
                  <li><a href="#" class="rightImg rightImg2"></a><span>音乐专栏</span></li>
                  <li><a href="#" class="rightImg rightImg3"></a><span>自媒体</span></li>
                  <li><a href="#" class="rightImg rightImg4"></a><span>赞赏功能</span></li>
                  <li><a href="#" class="rightImg rightImg5"></a><span>视频奖励</span></li>
              </ul>
          </div>
          </div>
      </div>
  </div>
</template>
<script>
//  console.log(3333)
//   window.onload=function(){
     
//   }
  export default{
      data(){
          return {
            list:[],//保存轮播图的图片
            oneList:[],//第一部分图片
            twoList:[],//第二部分图片
            threeList:[],//第三部分图片
            fourList:[],//第五部分图片
          }
      },
      created(){
        this.getImage();
        this.getOne();
        this.getTwo();
        this.getThree();
        this.getFour();
      },
      methods:{
        getImage(){
          var url="http://localhost:3000/imagelist";
          this.$http.get(url).then(result=>{
            console.log(result.body);
            this.list=result.body;
          })
        },
        getOne(){
          var url="http://localhost:3000/onefirst";
          this.$http.get(url).then(result=>{
              console.log(result.body);
              this.oneList=result.body;
          })
        },
        getTwo(){
          var url="http://localhost:3000/twosecond";
          this.$http.get(url).then(result=>{
              console.log(result.body);
              this.twoList=result.body;
          })
        },
        getThree(){
            var url="http://localhost:3000/threeInfo";
            this.$http.get(url).then(result=>{
                console.log(result.body);
                this.threeList=result.body;
            })
        },
        getFour(){
            var url="http://localhost:3000/mvinfo";
            this.$http.get(url).then(result=>{
                console.log(result.body);
                this.fourList=result.body;
            })
        },
      },
      mounted(){
 
      var v1=document.getElementById('div1');
      var v2=document.getElementById('div2');
      var v3=document.getElementById('div3');
      v3.innerHTML=v2.innerHTML;
      function fun(){
          if(v1.scrollLeft<=0){
              
              v1.scrollLeft=300; //从元素的某个位置开始显示元素
          }else{
              
              v1.scrollLeft--
          }
      }
      var fun1=setInterval(fun,10);
      v1.onmouseover=function(){
          clearInterval(fun1)
      };
      v1.onmouseout=function(){
          fun1=setInterval(fun,10)
      }
      }
  }
</script>
<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing :border-box;
    list-style: none;
    text-decoration: none;
}
#header-bg{
   background-color:#232323;
}
#header{
    width:1200px;
    height:70px;
    line-height: 70px;
   
    display:flex;
    margin:0 auto;
    justify-content: space-between;
}
#header .logo{
    margin-left:30px;
    width:176px;
    
    background-image: url(http://localhost:3000/img/header.png);
    background-repeat: no-repeat;
}
#header .first-nav{
    display: flex;
    color:#AAA;
    margin-left:-50px;
}
#header .first-nav li{
    font-size:14px;
    padding:0 20px;
    cursor: pointer;
}
#header .first-nav li:hover{
    background:#000;
    color:white;
}
#header .first-nav li.first-active{
    background:#000;
    color:white;
}
#header .btn-search{
    margin:0 -60px;
    
}
#header .btn-search .search{
    outline:none;
    border-radius: 15px;
    padding:8px 10px;
    border:none;
    width:150px;
    font-size:12px;
    margin-right:2px;
}

#header .video a{
    
    color:#AAA;
    font-size:12px;
    border:1px solid #AAA;
    border-radius: 15px;
    padding:5px 15px;
    margin-left:0;
}
#header .login{
    width:48px;
   
    background-image: url(http://localhost:3000/img/header.png);

    background-position: right -27px;
    margin-right:80px;
    margin-left:-50px;
}
#header .login .btn-login{
    color:#bbb;
    font-size:14px;
}
#nav-bg{
   background-color:#c20c0c;
}
#nav{
    width:1200px;
   
    text-align:center;
    height:34px;
    line-height:34px;
    margin:0 auto;
}
#nav ul{
    display: flex;
    justify-content: center;
    margin-left:-180px;
    
}
#nav ul li a{
    padding:0 25px;
    color:#fff;
    font-size:13px;
    border-radius: 13px;
}
#nav ul li a.nav-active{
    padding:3px 13px;
    background-color: #9b0909;
}
.el-carousel__item img {
    font-size: 14px;
    opacity: 1;
    line-height: 400px;
    margin: 0;
  }
.banner-wrap{
    background-color:#485563;
}
.banner-wrap .el-carousel__container{
    text-align: center;
}
.el-carousel .el-carousel__indicators--outside{
    margin-top:-55px;
    margin-bottom:10px;
}
.el-carousel .el-carousel__mask{
    width:0;
}
.main{
    width:1200px;
    margin:0 auto;
}
.newsone .oneFirst .oneTitle span,.oneDetails{
    display:block;
    text-align: center;
    font-size:26px;
    font-weight: bold;
    margin-top:20px;
    
}
.newsone .oneFirst .oneTitle a{
    color:#333;
    font-size:14px;
    font-weight: normal;
    padding-left:50px;
    
}
.newsone{
    width:1200px;
    text-align: center;
    margin:0 auto;
}
.city{
    color:#AAA;
}
.newsone .oneFirst{
    margin-bottom:20px;
}
.newsone .oneSecond,.twoSecond{
    margin-top:20px;
}
.newsone .oneSecond .secondImg,.secondWrap{
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
}
.newsone .imgdetails{
    padding:20px 0 20px 10px;
    width:240px;/*本身是内容撑开的 固定宽度 不会因为内容多少而改变*/
}
.newsone .oneSecond .secondImg .imgdetails img{
    width:200px;
    border-radius: 5px;
}
.newsone .oneSecond .secondImg .imgdetails .secondTxt,.count{
    font-size:13px;
    overflow: hidden;
    margin:10px 0 0 12px;
    text-align: left;

}

.newsone .secondWrap .newwrap{
    width:20%;
    
    position:relative;
    /*margin:10px;*/
}
.newsone .secondWrap .newwrap .wrapmask{
    background-image: url(http://localhost:3000/img/coverall.png);
    width:118px;
    height:100px;
    background-position:0 -570px;
    position:absolute;
    top:0;
    left:70px;
}
.newsone .secondWrap .newwrap .wraptitle,.wrapauthor{
    font-size:14px;
    text-align: center;
    /*margin-left:60px;*/
} 
.newsone .threewrap{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin:20px 20px;
}
.newsone .threesecond .threewrap .timewrap{
    display: flex;
    width:33.33%;
    flex-wrap: wrap;
    margin-bottom:10px;
    position:relative;
    padding-bottom:10px;
    border-bottom:1px solid #e7e4e4;

}
.newsone .threeImg,.btn,.onrwrap{
    overflow: hidden;
    transition:all 0.6s;
}
.newsone .threesecond .threewrap .threeImg:hover{
    transform:scale(1.1);
}
.btn:hover{
    transform:scale(1.1);
}
.onrwrap:hover{
    transform:scale(1.1);
}
/* .fourImg:hover{
    transform:scale(1.1);
} */
.newsone .threesecond .threewrap .threetxt{
    margin:20px 10px;
}
.newsone .threesecond .threewrap .threetxt a{
    display: block;
    text-align: left;
    color:#333;
    font-size:14px;
}
.newsone .threesecond .threewrap .threetime{
    position:absolute;
    top:30%;
    right:10%;
}
.wrapauthor,.count{
    color:#999;
}
.newsone .fourmain .fourwrap{
    display: flex;
    /*justify-content: center;*/
    
    flex-wrap: wrap;
    overflow: hidden;
}
.newsone .fourmain .fourwrap .mainwrap{
    width:23%;
    margin:8px 10px;
}
.newsone .fourmain .fourwrap .mainwrap .fourImg img{
    width:100%;
    
}
.newsone .fourmain .fourwrap .mainwrap .fourImg{
    transition:all 1.2s ease-in-out;
}
.newsone .fourmain .fourwrap .mainwrap .fourImg:hover{
    transform:rotateY(180deg);
}
.newsone .fourmain .fourtxt{
    text-align: left;
    font-size:14px;
}
.newsone .fourmain .fourtxt .count1{
    color:#999;
    margin-top:5px;
}
.footer{
      margin-top:20px;
      background-color: #232323;
      padding:20px;
      color:#999;
      font-size:14px;
      width:auto;
   }
.footer1{
    width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
}
  .footer .info{
      display: flex;
      margin-bottom:20px;
  }
  .footer .info li{
      padding-right:20px;
  }
  .footer a{
      color:#999;
  }
  .copyright{
     margin-top:10px; 
  }
  .copyright span{
      padding-right:15px;
  }
  .right .rig-list{
      display: flex;
  }
  .right .rig-list li{
      padding-right:20px;
  }
  .right .rig-list .rightImg{
      display: block;
      width:44px;
      height:44px;
      margin:0 auto;
      background-image: url(http://localhost:3000/img/footer.png);
      background-repeat: no-repeat;
      background-size: 110px 450px;
  }
  .right .rig-list .rightImg1{
      background-position: 0 0;
      
   }
   .right .rig-list .rightImg2{
       background-position: -60px 0;
   }
   .right .rig-list .rightImg3{
       background-position: 0 -50px;
   }
   .right .rig-list .rightImg4{
       background-position: -60px -50px;
   }
   .right .rig-list .rightImg5{
       background-position: 0 -100px;
   }
   #div2,li{
       margin:0;
       padding:0;
   }
   #div2 li{
       float:left;
       height:100px;
       width:150px;
   }
   #div1{
       width:1200px;
       height:150px;
       overflow: hidden;
       margin:0 auto;
   }
   #div2,#div3{
       float:left;
   }
   #div4{
       width:500%;
       float:left;
   }
</style>