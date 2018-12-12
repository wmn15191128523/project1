<template>
  <div class="wy-footer">
      <div class="footer">
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
</template>
<script>
  export default{
      data(){
          return {}
      }
  }
</script>
<style>
  *{
      margin:0;
      padding:0;
      box-sizing: border-box;
  }
  .wy-footer{
      margin-top:20px;
      background-color: #f9f9f9;
      padding:20px;
      color:#999;
      font-size:14px;
  }
  .footer{
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
</style>