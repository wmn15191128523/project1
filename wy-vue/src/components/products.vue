<template>
  <div class="wy-products">
    
    <!--轮播图-->
   <div class="s-main">
    <div class="pbanner-wrap">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in list" :key="item.id">
          <img :src="item.img_url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--小图标-->
    <div class="smicon">
      <ul class="iconmain">
        <li class="icon-item">
          <img src="http://localhost:3000/img/smicon/01.jpg">
          <p class="icontxt">数码影音</p>
        </li>
        <li class="icon-item">
          <img src="http://localhost:3000/img/smicon/02.jpg">
          <p class="icontxt">IP周边</p>
        </li>
        <li class="icon-item">
          <img src="http://localhost:3000/img/smicon/03.jpg">
          <p class="icontxt">热销爆品</p>
        </li>
        <li class="icon-item">
          <img src="http://localhost:3000/img/smicon/04.jpg">
          <p class="icontxt">积分商城</p>
        </li>
      </ul>
    </div>
    <!--主体内容-->
    <div class="pb-main ">
      <div class="main-log ">
        <a href="#" class="img1">
          <img src="http://localhost:3000/img/left.jpg">
        </a>
        <a href="#" class="img2">
          <img src="http://localhost:3000/img/right.jpg">
        </a>
      </div>
      <!--编辑推荐-->
      <div class="pb-recom ">
        <h3 class="recomtxt">编辑推荐</h3>
        <div class="recom-main">
          <ul class="recom-list">
            <li class="recom-item" v-for="item in recomList" :key="item.pid">
             <router-link :to="'details?pid='+item.pid">
                <img :src="item.img_url" class="img-1">
                <div class="recom-txt">
                  <span class="recom-top">热门</span>
                  <span class="recom-details">{{item.title}}</span>
                  <p class="recom-price">￥{{item.price}}</p>
                </div>
             </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--数字专辑-->
      <div class="pro-num">
        <div class="num1">
          <div class="num-title">
            <img src="http://localhost:3000/img/num.jpg">
            <span>数字专辑</span>
          </div>
          <p class="num-details">Taylor Swift全新专辑火热售卖中</p>
          <p class="num-addr">立即购买  ></p>
        </div>
        <div class="num-img">
          <img src="http://localhost:3000/img/num2.jpg">
          <img src="http://localhost:3000/img/num1.jpg">
        </div>
      </div>
      <!--热门商品-->
      <div class="pb-recom ">
        <h3 class="recomtxt">热门商品</h3>
        <div class="recom-main">
          <ul class="recom-list">
            <li class="recom-item" v-for="item in topList" :key="item.nid">
              <img :src="item.img_url">
              <div class="recom-txt">
                <span class="recom-details">{{item.title}}</span>
                <p class="recom-price">{{item.price}}</p>
              </div>
            
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    <!--底部内容-->
    
  </div>
</template>
<script>
  export default{
      data(){
          return {
              nid:0,
              list:[],//轮播图
              recomList:[],
              
              topList:[]
          }
      },
      
      created(){
          this.getList();
          this.getProne();
          this.getTop();
      },
      
      methods:{
        getList(){
            var url="http://localhost:3000/imglist";
            this.$http.get(url).then(result=>{
                console.log(result.body);
                this.list=result.body;
            })
        },
        getProne(){
            var url="http://localhost:3000/recomList";
            this.$http.get(url,{params:{nid:this.nid}}).then(result=>{
                console.log(result.body);
                this.recomList=result.body;
            })
        },
        getTop(){
            var url="http://localhost:3000/topList";
            this.$http.get(url).then(result=>{
                console.log(result.body);
                this.topList=result.body;
            })
        }
      }
  }
</script>
<style >
   *{
    margin:0;
    padding:0;
    box-sizing :border-box;
    list-style: none;
    text-decoration: none;
}
   .s-main{
       width:1200px;
       margin:0 auto;
   }
   .pbanner-wrap .el-carousel{
     height:520px;
   }
   .pbanner-wrap .el-carousel__container{
       width:1200px;
       margin:0 auto;
       height:480px;
       overflow: hidden;
    }
   .el-carousel__item img{
    display: block;
    opacity: 1;
    width:100%;
    height:100%;
    
   }
  .smicon .iconmain{
      margin:30px auto;
      display:flex;
      justify-content:space-around;
      
      padding-bottom:15px;
      border-bottom:1px solid #ddd;
  }
  .smicon .iconmain .icon-item{
      
      cursor:pointer;
  }
  .smicon .iconmain .icon-item img{
    transition:all 0.2s ease-in-out;
  }
  .smicon .iconmain .icon-item:hover img{
    transform: rotate(-40deg);
    
  }
  .pb-main .main-log{
      display:flex;
      justify-content:space-between;
      padding-top:30px;
  }
  .pb-main .main-log img{
    transition: all 1.2s ease-in-out
  }
  .pb-main .main-log img:hover{
    transform: rotateY(180deg)
  }
  .pb-main .pb-recom{
      margin:50px 0 30px 0;
  }
  .pb-main .recomtxt{
      text-align:left;
      font-size:26px;
      padding-bottom:20px;
  }
  .pb-main .pb-recom .recom-main .recom-list{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
  }
  .pb-main .pb-recom .recom-main .recom-list .recom-item{
      margin-bottom:50px;
      width:24%;
  }
  .pb-main .pb-recom .recom-main .recom-list .recom-item img{
      background-color: #f2f2f2;
      display: inline-block;
      width:100%;
      transition:all 0.6s;
  }
  .pb-main .pb-recom .recom-main .recom-list .recom-item img:hover{
    transform: scale(1.1)
  }
  .pb-main .pb-recom .recom-main .recom-list .recom-item .img-1{
      padding:10px;
  }
  .recom-main .recom-list .recom-txt{
      font-size:14px;
      
      margin-top:5px;
  }
  .recom-main .recom-list .recom-item .recom-top{
      color:#d74d45;
      text-align:left;
      border:1px solid #d74d45;
      padding:1px;
      margin-right:3px;
  }
  .recom-main .recom-list .recom-item .recom-price{
      color:red;
      font-size:16px;
      margin-top:10px;
      text-align:center;
  }
  .recom-main .recom-list .recom-item .recom-details{
      cursor:pointer;
      color:#232323;
     
  }
  .recom-main .recom-list .recom-item .recom-details:hover{
      text-decoration:underline;
  }
 .pb-main .pro-num{
     display:flex;
     justify-content:space-between;
     margin-bottom:30px;
     background-color: #f2f2f2;
     padding:20px 50px;
     
 }
 .pb-main .pro-num .num1{
     display:flex;
     flex-direction:column;
     cursor:pointer;
 }
 .pb-main .pro-num img{
     vertical-align:middle;
 }
 .pb-main .pro-num .num-title{
     font-size:28px;
     font-weight:bold;
     vertical-align:middle;
 }
 .pb-main .pro-num .num-title span{
   margin-left:10px;
 }
 .pb-main .pro-num .num-details{
     color:rgba(0,0,0,.7);
     margin:5px 0 10px 0;
 }
 .pb-main .pro-num .num-addr{
    font-size:24px;
    font-weight:bold;
    transition:all 0.6s ease-in-out;
 }
 .pb-main .pro-num .num-addr:hover{
   margin-left:500px;
 }
 .pb-main .pro-num .num-img{
    padding-top:-10px;
 }
 
</style>