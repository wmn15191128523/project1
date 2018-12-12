<template>
  <div class="wy-shop">
    <div class="shopMain">
       <div class="shopFirst">
           <h3 class="srecomtxt">购物车</h3>
           <div class="sheader">
               <ul class="smain">
                   <li class="squre"></li>
                   <li class="sli11">全选</li>
                   <li class="sli12">商品</li>
                   <li class="sli13">金额</li>
                   <li class="sli1">数量</li>
                   <li class="sli1">小计</li>
                   <li class="sli14">操作</li>
               </ul>
               <!--主体内容-->
               <div class="shopmain">
                   <div class="shopheader">
                       <p class="shop1">全部商品</p>
                       <p><a href="#">全场满￥119免运费(还差￥119)去凑单</a></p>
                   </div>
                   <div class="shopcontent">
                      <ul class="smain">
                         <li class="squre"></li>
                         <li class="img1"><img src="http://localhost:3000/img/low1.jpg"></li>
                         <li class="con1">JBL立体声入耳式耳机</li>
                         <li class="con2">￥128</li>
                         <div class="num">
                          <p class="hr">
                              <button class="cl2" @click="cartSub()">-</button>
                              <input class="cl11" value="1" v-model="val">
                              <button class="cl4" @click="cartAdd()">+</button>
                           </p>
                         </div>
                         <li class="con4">￥128</li>
                         <li class="con5">×</li>
                      </ul>
                   </div>
                   <div class="shopfooter">
                       <ul class="smain">
                           <li class="squre"></li>
                           <li class="sli11">全选</li>
                           <li class="sli12">已选择1件商品</li>
                           <li class="sli1">小计</li>
                           <li class="sli1">结算</li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
        <div class="spb-recom">
           <h3 class="srecomtxt">热门推荐</h3>
           <div class="srecom-main">
             <ul class="srecom-list">
              <li class="srecom-item" v-for="item in topList" :key="item.id">
              <img :src="item.img_url">
              <div class="srecom-txt">
                <span class="srecom-details">{{item.title}}</span>
                <p class="srecom-price">{{item.price}}</p>
              </div>
            
            </li>
          </ul>
        </div>
       </div>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return {
              topList:[],
              val:1
          }
      },
      created(){
         this.getTop(),
         this.cartAdd(),
         this.cartSub()
      },
      methods:{
          getTop(){
            var url="http://localhost:3000/topList";
            this.$http.get(url).then(result=>{
                console.log(result.body);
                this.topList=result.body;
            })
        }
      },
       cartSub(){
              if(this.val>0)
              this.val--;
          },
          cartAdd(){
              this.val++;
          },
  }
</script>
<style scoped>
  .shopMain{
      width:1200px;
      margin:0 auto;
      border:1px solid red;
      height:auto;
  }
  .spb-recom{
      margin:50px 0 30px 0;
  }
  .srecomtxt{
      text-align:left;
      /* font-size:26px; */
      padding-bottom:20px;
      border-bottom:1px solid #232323;
  }
  .smain{
      display: flex;
      justify-content: space-between;
  }
  .cl11{
      display: inline-block;
      width:50px;
      height:32px;
  }
  .smain .squre{
      background: url(http://localhost:3000/img/cart.png) no-repeat;
      background-position: -54px -36px;
      position:relative;
      top:30px;
      display: inline-block;
      cursor: pointer;
      width:20px;
      height:20px;
      margin:0 10px 0 40px;
  }
  .smain li{
      margin:30px 0;
  }
  .smain .sli11{
     margin-left:-200px;
  }
  .smain .sli12{
      margin-left:-130px;
  }
  .smain .sli13{
      margin-right:-20px;
  }
  .smain .sli14{
      margin-right:30px;
  }
  .shopheader{
      display: flex;
      justify-content: space-around;
      color:#999;
      border-bottom:1px solid #f2f2f2;
      padding:5px 0;
  }
  .shopmain{
      border:1px solid #f2f2f2;
      padding:10px;
  }
  .shopheader a{
      color:#999;
  }
  .btn{
      width:40px;
      height:20px;
      padding:8px 10px;
      background-color: red;
      display: inline-block;
      margin-right:10px;
  }
  .img1{
      width:80px;
      height:80px;
  }
  .img1 img{
      width:100%;
  }
  .spb-recom .srecom-main{
      margin-top:30px;
  }
  .spb-recom .srecom-main .srecom-list{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
  }
  .spb-recom .srecom-main .srecom-list .srecom-item{
      margin-bottom:50px;
      width:24%;
  }
  .spb-recom .srecom-main .srecom-list .srecom-item img{
      background-color: #f2f2f2;
      display: inline-block;
      width:100%;
      /* transition:all 0.6s; */
  }
  /* .pb-recom .recom-main .recom-list .recom-item img:hover{
    transform: scale(1.1)
  } */
  .spb-recom .srecom-main .srecom-list .srecom-item .simg-1{
      padding:10px;
  }
  .srecom-main .srecom-list .srecom-txt{
      font-size:14px;
      
      margin-top:5px;
  }
  .srecom-main .srecom-list .srecom-item .srecom-top{
      color:#d74d45;
      text-align:left;
      border:1px solid #d74d45;
      padding:1px;
      margin-right:3px;
  }
  .srecom-main .srecom-list .srecom-item .srecom-price{
      color:red;
      font-size:16px;
      margin-top:5px;
      text-align:center;
  }
  .srecom-main .srecom-list .srecom-item .srecom-details{
      cursor:pointer;
      color:#232323;
  }
  .srecom-main .srecom-list .srecom-item .srecom-details:hover{
      text-decoration:underline;
  }
 
</style>