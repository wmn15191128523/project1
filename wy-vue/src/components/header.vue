<template>
  <div class="header-main">
        <div class="pro-header">
        <div class="header-logo">
            <a href="#" class="header-img"></a>
        </div>
        <div class="btn-search">
            <input type="text" class="search" placeholder="氧气耳机">
        </div>
        <div class="header-shop">
            <router-link to="shopcart" class="shop"></router-link>
        </div>
        <!-- <div class="header-login">
            <a href="#" class="btn-login">登录</a>
        </div> -->
        
            <el-dropdown>
                <span class="el-dropdown-link">
                    <router-link to="/login" class="logintxt">
                登录</router-link><i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>手机号登录</el-dropdown-item>
                    <el-dropdown-item>微信登录</el-dropdown-item>
                    <el-dropdown-item>QQ登录</el-dropdown-item>
                    <el-dropdown-item>新浪微博登录</el-dropdown-item>
                    <el-dropdown-item>网易邮箱账号登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        
        
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
    .header-main{
     border-bottom:1px solid #f2f2f2;
   }
   
   .pro-header{
       width:1200px;
       height:70px;
       margin:0 auto;
       display:flex;
       justify-content:space-between;
       
   }
   .pro-header .header-img,.shop{
       display:inline-block;
       background-image:url(http://localhost:3000/img/shop-logo.png);
       background-repeat:no-repeat;
       background-position:0 -48px;
       width:290px;
       height:70px;
   }
   .pro-header .btn-search{
    margin:20px 0 0 200px;
    }
    .pro-header .btn-search .search{
        border:1px solid #ddd;
        border-radius: 15px;
        padding:8px 10px;
        width:200px;
        font-size:12px;
        outline:none;
        transition: all 0.6s ease-in-out;
    }
    
    .pro-header .shop{
       background-position:-110px -158px;
       width:36px;
       height:36px;
       margin:15px 0 0 0;
    }
    .el-dropdown-link{
      display: block;
      margin-top:20px;
      color:#333;
      font-size:16px;
   } 
   .logintxt{
       color:#333;
   }
   .el-dropdown-menu{
       margin-top:-15px !important
   }
</style>