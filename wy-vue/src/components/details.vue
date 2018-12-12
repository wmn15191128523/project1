<template>
  <div class="wy-details">
      <div class="demain">
         <!--1.详情首页-->
         <div class="f-main">
            <div class="f-details">
                <div class="f-title">
                    <span class="top">首页</span>
                    <span class="details"> > {{res.title}}</span>
                </div>
                <div class="f-share">
                    分享
                </div>
            </div>
            <div class="d-main">
               <div class="imgmain">
                 <!--小盒子-->
                 <div class="bgImg" id="smallBox">
                     <div id="tool" class="tool"></div>
                     <img :src="res.imgbg">
                 </div>
                 <!--大盒子-->
                 <div id="bigBox" class="bigBox">
                     <img :src="res.imgbg" id="bigImg">
                 </div>
                 <div class="smImg" id="smImg">
                     <img :src="res.imgs1" class="smactive">
                     <img :src="res.imgs2" @mouseover="addClass($event)" @mouseout="removeClass($event)">
                     <img :src="res.imgs3" @mouseover="addClass($event)" @mouseout="removeClass($event)">
                 </div>
               </div>
               <div class="txtmain">
                   <div class="txt1">{{res.title}}</div>
                   <div class="txt2">{{res.subtitle}}</div>
                   <div class="price">¥{{res.price}}</div>
                   <div class="smtxt">
                    <div class="sale">
                        <span class="sale1">促销:</span>
                        <p class="hr hr1">
                            <span class="sale2">手慢无</span>
                            <span class="sale3">40元 JBL耳机立减券，无门槛</span>
                            <span class="sale4">领券</span>
                        </p>
                    </div>
                    <div class="color">
                        <span class="sale1">颜色:</span>
                        <p class="hr">
                            <p class="cl1" @click="addColor($event)" @mouseup="removeColor($event)">红色</p>
                            <p class="cl1" @click="addColor($event)" @mouseup="removeColor($event)">黑色</p>
                            <p class="cl1" @click="addColor($event)" @mouseup="removeColor($event)">白色</p>
                        </p>
                    </div>
                    <div class="num">
                        <span class="sale1">数量:</span>
                        <p class="hr">
                            <button class="cl2" @click="cartSub()">-</button>
                            <input class="cl11" value="1" v-model="val">
                            <button class="cl4" @click="cartAdd()">+</button>
                        </p>
                    </div>
                    <div class="serve">
                        <span class="sale1">服务:</span>
                        <p class="hr">
                            <span class="sdetails"><span class="point">·</span>商家发货</span>
                            <span class="sdetails"><span class="point">·</span>商家认证</span>
                        </p>
                    </div>
                   </div>
                   <div class="shopping">
                       <button class="shop1">立即购买</button>
                       <button class="shop2" data-lid="1" @click="addShop()">加入购物车</button>
                   </div>
               </div>
            </div>
         </div>
         <!--2.优惠套餐-->
         <div class="lowprice">
             <div class="lowtitle">优惠套餐</div>
             <div class="lowmain">
              <el-tabs v-model="activeName">
                 <el-tab-pane label="套餐一  ·" name="first" class="tab active">
                    <div class="lowImg">
                        <div class="lowimg1">
                            <div class="imgbar">
                                <img :src="res.img0">
                            </div>
                            <p class="imgtxt">{{res.title}}</p>
                            
                            <p class="imgprice">
                                <span class="price1">¥98</span>
                                <span class="price2">¥128</span>
                            </p>
                            
                        </div>
                        <div class="lowimg1">
                            <div class="imgbar">
                                <img :src="res.img1">
                            </div>
                            <p class="imgtxt">套餐伴侣</p>
                            <p class="imgprice">
                                <span class="price1">¥99</span>
                                <span class="price2">¥129</span>
                            </p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="套餐二   ·" name="second"><div class="lowImg">
                        <div class="lowimg1">
                            <div class="imgbar">
                                <img :src="res.img0">
                            </div>
                            <p class="imgtxt">{{res.title}}</p>
                            
                            <p class="imgprice">
                                <span class="price1">¥98</span>
                                <span class="price2">¥128</span>
                            </p>
                            
                        </div>
                        <div class="lowimg1">
                            <div class="imgbar">
                                <img :src="res.img2">
                            </div>
                            <p class="imgtxt">套餐伴侣</p>
                            <p class="imgprice">
                                <span class="price1">¥99</span>
                                <span class="price2">¥129</span>
                            </p>
                        </div>
                    </div>
                    </el-tab-pane>
                <el-tab-pane label="套餐三   ·" name="third"><div class="lowImg">
                        <div class="lowimg1">
                            <div class="imgbar">
                                <img :src="res.img0">
                            </div>
                            <p class="imgtxt">{{res.title}}</p>
                            
                            <p class="imgprice">
                                <span class="price1">¥98</span>
                                <span class="price2">¥128</span>
                            </p>
                            
                        </div>
                        <div class="lowimg1">
                            <div class="imgbar">
                                <img :src="res.img3">
                            </div>
                            <p class="imgtxt">套餐伴侣</p>
                            <p class="imgprice">
                                <span class="price1">¥99</span>
                                <span class="price2">¥129</span>
                            </p>
                        </div>
                    </div>
                    </el-tab-pane>
                <el-tab-pane label="套餐四" name="fourth"><div class="lowImg">
                        <div class="lowimg1">
                            <div class="imgbar">
                                <img :src="res.img0">
                            </div>
                            <p class="imgtxt">{{res.title}}</p>
                            
                            <p class="imgprice">
                                <span class="price1">¥98</span>
                                <span class="price2">¥128</span>
                            </p>
                            
                        </div>
                        <div class="lowimg1">
                            <div class="imgbar">
                                <img :src="res.img4">
                            </div>
                            <p class="imgtxt">套餐伴侣</p>
                            <p class="imgprice">
                                <span class="price1">¥99</span>
                                <span class="price2">¥129</span>
                            </p>
                        </div>
                    </div>
                    </el-tab-pane>
              </el-tabs>
                    <div class="lowTxt">
                        <p class="ltxt1">
                            共2件，已选择<span>1</span>件搭配商品
                        </p>
                        <p class="ltxt2">
                            <span class="bar">套餐价：</span>
                            <span class="lp">¥197</span>
                        </p>
                        <p class="ltxt3">
                            <span class="ltxt1">可优惠: ¥60</span>
                        </p>
                        <p class="shop2">立即购买</p>
                    </div>
                </div>
             </div>
         </div>
         <!--3.商品详情 热门商品-->
         <div class="detailsmain">
             <div class="leftde">
                 <div class="lefttitle">商品详情</div>
                 <div class="leftdetails">
                     <p class="leftinfo">正品低价 品质保证：云音乐商城所有产品均由品牌方直供，杜绝假货。</p>
                     <p class="leftinfo">装箱清单：耳机× 1，包装× 1，保修卡× 1。</p>
                     <p class="leftinfo">该产品一经拆封，非质量问题不接受7天无理由退货。</p>
                 </div>
                 <div class="leftimg">
                     <img :src="res.imgde" >
                 </div>
                 <div class="restinfo">
                     <p class="restxt">商品交易成功后会在2个工作日内由北京恒远恒信科技发展有限公司发货，法定节假日顺延（包含周六日），请在确认商品完好后再签收。若存在质量问题，请务必在7天之内联系客服：</p>
                     <p class="restxt">·客服账号：私信 @云音乐客服</p>
                     <p class="restxt">·温馨提示：完整的包装、配件和保修卡是电子产品进行售后的基础，请务必查看齐全后签收并妥善保管。</p>
                 </div>
             </div>
             <div class="rightde">
                 <div class="righttitle">热门商品</div>
                
                    <ul class="otherp">
                        <li class="other-item" v-for="item in list" :key="item.id">
                            <div class="imgcontainer">
                            <img :src="item.img_url" alt="">
                            </div>
                            <div class="itemde">
                                <span class="sale2">特价</span>
                                <span class="itemtitle">{{item.title}}</span>
                                <p class="imgprice1">{{item.price}}</p>
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
              list:[] ,//热门商品
              pid:this.$route.query.pid, //接收参数
              res:{},
              activeName: 'first',
              val:1
          }
      },
      
      created(){
          this.getHot(),
          this.getDetail(),
          this.addShop()

      },
      methods:{
          addShop(){
              var url="http://localhost:3000/shopList";
              this.$http.get(url,{params:{pid:this.pid,count:this.val}}).then(result=>{
                  console.log(result)
              })
          },
          getHot(){
            var url="http://localhost:3000/hotlist";
            this.$http.get(url).then(result=>{
                console.log(result.body);
                this.list=result.body;
            })
          },
          getDetail(){
              var url="http://localhost:3000/deList";
              this.$http.get(url,{params:{pid:this.pid}}).then(result=>{
                console.log(result.body[0]);
                this.res=result.body[0];
            })
          },
          cartSub(){
              if(this.val>0)
              this.val--;
          },
          cartAdd(){
              this.val++;
          },
          addClass($event){
             $event.currentTarget.className="smactive" //当前处理的元素
          },
          removeClass($event){
             $event.currentTarget.className=""
          },
          addColor($event){
             $event.currentTarget.className="shopColor" 
          },
          removeColor($event){
              $event.currentTarget.className="cl1"
          },
         
      },
      mounted(){
          var smallBox = document.getElementById("smallBox");  //小盒子
            var tool = document.getElementById("tool");  //放大镜
            var bigBox = document.getElementById("bigBox");  //大盒子
            var bigImg = document.getElementById("bigImg");  //大图片
            
            //第二步：当鼠标浮动到小盒子上时，显示出放大镜（tool）,显示出右边的大盒子。
            smallBox.onmouseover = function(){
            tool.style.display = "block";  //显示出放大镜（tool）
            bigBox.style.display = "block"; //显示出右边的大盒子。
            }
            smallBox.onmouseout = function(){
            tool.style.display = "none";  //隐藏出放大镜（tool）
            bigBox.style.display = "none"; //隐藏出右边的大盒子。
            }
            //第三步：在小盒子上移动鼠标时，放大镜（tool）跟着鼠标移动（范围就是小盒子内）。右边的大盒子中的大图片也随之移动
            //offsetWidth  offsetHeight   获取一个节点对象的宽度和高度（不包括滚动条）
            smallBox.onmousemove = function(e){
            var _event = window.event||e; //事件对象
            //计算放大镜（tool）的x坐标
            var left = _event.clientX-smallBox.offsetLeft-tool.offsetWidth/2;
            //计算放大镜（tool）的y坐标
            var top = _event.clientY-smallBox.offsetTop-tool.offsetHeight/2;
            //处理left和top值(限制范围)
            if(left<0){
            left = 0;
            }
            if(top<0){
            top = 0;
            }
            if(left>smallBox.offsetWidth-tool.offsetWidth){
            left = smallBox.offsetWidth-tool.offsetWidth;
            }
            if(top>smallBox.offsetHeight-tool.offsetHeight){
            top = smallBox.offsetHeight-tool.offsetHeight;
            }
            //改变放大镜的一个坐标
            tool.style.left = left + "px";
            tool.style.top = top + "px";
            //求图片应当移动的距离
            var x = tool.offsetLeft*bigBox.offsetWidth/tool.offsetWidth;
            var y = tool.offsetTop*bigBox.offsetHeight/tool.offsetHeight;
            //改变图片移动的距离
            bigImg.style.left = -x + "px";
            bigImg.style.top = -y + "px";
            }

            }
  }
</script>
<style>
   .demain{
       width:1200px;
       margin:50px auto;
    }
   .f-details{
       display: flex;
       justify-content: space-between;
       border-bottom:1px solid #232323;
       padding-bottom:15px;
       margin-bottom:20px;
   }
   .f-details .f-title .top,.details,.f-share{
       font-size:20px;
       font-weight:bold;

   }
   .f-details .f-title .details{
       font-size:16px;
       color:#999;
   }
   .f-details .f-share{
       background: url(http://localhost:3000/img/share.png) no-repeat 0 2px;
       font-size:16px;
       text-indent: 27px;/*首行缩进27px*/
       color:#666;
   }
   .f-main .d-main{
       display: flex;
       justify-content: space-between;
   }
   .d-main .imgmain img{
      background-color: #f9f9f9;
   }
   .d-main .imgmain{
       position:relative;
   }
   .d-main .imgmain .bgImg{
       margin-bottom:15px;
   }
   .smallBox{
       /*width:300px;*/
       position:absolute;
       cursor:move;
       top:0;
       overflow: hidden;
   }
   .tool{
       display: none;
       width:100px;
       height:100px;
       background-color:#999;
       filter: alpha(opacity=50);
       opacity: 0.5;
       position:absolute;
       
   }
   .smallBox img{
       width:100%;
   }
   .bigBox{
       display: none;
       width:400px;
       height:400px;
       overflow: hidden;
       position: absolute;
       left:450px;
       top:50px;
   }
   .bigBox img{
       position:absolute;
       width:1760px;
   }
   .smactive{
       border:1px solid red;
   }
   .shopColor{
       display:inline-block;
       border:1px solid red;
       padding:5px 20px;
       margin-right:10px;
   }
   .d-main .imgmain .smImg img{
       margin-right:15px;
   }
   .d-main .txtmain{
       width:55%;
   }
   .d-main .txtmain div{
       margin-bottom:25px;
   }
   .d-main .txtmain .txt1{
       font-size:24px;
       margin-bottom:15px;
   }
   .d-main .txtmain .txt2{
       font-size:14px;
       color:#999;
       
   }
   .demain .price{
       font-size:28px;
       color:#d33a31;
       margin:30px 0;
   }
   .d-main .txtmain .smtxt{
       font-size:13px;
       margin:30px 0;
   }
   .d-main .txtmain .sale1{
       color:#999;
   }
   .d-main .txtmain .smtxt .hr{
       display: inline-block;
       margin-left:30px;
   }
   .sale2{
       color:#d33a31;
       border:1px solid #d33a31;
       padding:0 2px;
       margin-right:10px;
   }
   .d-main .txtmain .sale4{
       color:#328ad4;
       margin-left:10px;
   }
   
   .d-main .txtmain .hr1{
       width:500px;
       border:1px solid #f8e2e0;
       padding:5px;
       background-color:#fdf5f4;
   }
   .d-main .txtmain .cl1,.cl2,.cl4{
       display:inline-block;
       border:1px solid #999;
       padding:5px 20px;
       margin-right:10px;
   }
   .d-main .txtmain .cl2{
       color:#999;
   }
   .d-main .txtmain .cl2,.cl4{
      padding:5px 10px;
      margin:0;
   }
   .d-main .txtmain .num .cl11{
       margin:0;
       width:50px;
       height:32px;
       border:1px solid #f2f2f2;
   }
   .d-main .txtmain .point{
       margin-right:2px;
       color:red;
       font-size:20px;
       
   }
   .d-main .txtmain .sdetails{
       margin-right:30px;
   }
   .demain .shop1,.shop2{
       font-size:18px;
       color:#d33a31;
       border:2px solid  #d33a31;
       padding:10px 40px;
       margin:20px 10px 0 0;
   }
   .demain .shop2{
       background-color: #d33a31;
       color:#fff;
       /*background: url(http://localhost:3000/img/icon1.png) no-repeat;
       background-position: -20px -240px;
       width:30px;
       height:22px;*/
   }
   .demain .lowprice{
       margin:30px 0;
       border:1px solid #ddd;
       
   }
   .demain .lmain{
       padding:20px;
   }
   .demain .lmain .lowTxt{
       margin-top:20px;
   }
   .demain .lowprice .lowtitle{
       background-color: #f4f4f4;
       padding:10px 20px;
       font-weight:bold;
   }
   .demain .lowmain{
       display: flex;
       justify-content: space-between;
       
   }
   .demain .lmain .tabtitle .tab{
       color:#999;
       margin-right:20px;
   }
   .demain .lmain .tabtitle .active{
       color:#232323;
   }
   .demain .lowImg{
       display: flex;
       padding:15px;
       /*align-items: center;*/
   }
   .demain .lowImg .lowimg1{
       width:20%;
       margin-right:20px;
   }
   .demain .lowImg .lowimg1 img{
       width:100%;
       
   }
   /*.imgadd img{
       vertical-align: middle;
    }*/
   .demain .lowImg .imgtxt,.imgprice{
       font-size:14px;
       text-align: center;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
   }
   .demain .imgprice,.imgprice1{
       font-size:16px;
       color:#d33a31;
       margin-top:5px;
   }
   .demain .imgprice .price2{
       color:#999;
       margin-left:10px;
       text-decoration:line-through;
   }
   .demain .lowTxt{
       border-left:1px solid #f2f2f2;
       padding:0 30px;
       margin-top:80px;
   }
   .demain .lowTxt .ltxt1{
       font-size:14px;
       color:#999;
   }
   .demain .lowTxt .ltxt1 span{
       color:#d33a31;
   }
   .demain .lowTxt .bar{
       font-size:16px;
       color:#333;
   }
   .demain .lowTxt .lp{
       font-size:25px;
       color:#d33a31;
   }
   .demain .ltxt2{
       margin:30px 0 10px 0;
   }
   .detailsmain{
       width:1200px;
       margin:0 auto;
       display: flex;
       justify-content: space-between;
   }
   .detailsmain .leftde{
       width:700px;
       
    }
   .detailsmain .leftde .leftdetails{
       font-size:14px;
       color:red;
       margin:30px 0;
   }
   .detailsmain .lefttitle,.righttitle{
       font-size: 20px;
       font-weight:bold;
       border-bottom:1px solid #333;
       padding-bottom: 15px;
   }
  .detailsmain .righttitle{
       font-weight:normal;
   }
   .detailsmain .leftde .leftdetails .leftinfo{
       margin-bottom:20px;
   }
   .detailsmain .leftde img{
       width:100%;
   }
   .detailsmain .rightde .other-item{
       display: flex;
       margin-top:30px;
   }
   .detailsmain .rightde .other-item .imgcontainer{
       width:100px;
       height:100px;
   }
   .detailsmain .rightde .other-item .imgcontainer img{
       display: inline-block;
       width:100%;
       background-color: #f4f4f4;
   }
   .detailsmain .itemde{
       width:200px;
       font-size:14px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: normal;
       /*display: -webkit-box;*/
       margin-left:10px;
       padding-top:10px;
   }
   .detailsmain .imgprice1{
       margin-top:10px;
   }
   .restinfo{
       font-size:14px;
       color:#666;
       
   }
   .restinfo p{
       padding-bottom:10px;
   }
   .el-tabs__item.is-active{
       color:#999 !important;
   }
   .el-tabs--top .el-tabs__item.is-top:nth-child(2){
       padding-left:20px !important
   }
   
</style>