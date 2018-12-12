<template>
  <div class="wy-login">
     <div class="sign">

       <!--2.登录主体界面-->
       <div class="main">
           <div class="title">
               <div class="title-main">
                   <a href="#" class="signin">登录</a>
                   <span class="diandian">·</span>
                   <a href="#" class="reg">注册</a>
               </div>
           </div>
           <div class="login-container clearfix">
               <div class="login-first">
                   <input type="text" placeholder="用户名" v-model="uname" id="first-input">
                  <input type="text" placeholder="密码" v-model="upwd">
               </div>
               <div class="remember-btn">
                   <input type="checkbox" checked><span>记住我</span>
               </div>
               <div class="login-forget clearfix">
                   <a href="#" class="dropdown">登录遇到问题?</a>
               </div>
               <a href="#" class="login-btn" @click="signin()">登录</a>
           </div>
           <!--更多登录方式-->
           <div class="other-login">
               <div class="other-txt">社交账号登录</div>
               <a href="#"><img src="http://localhost:3000/img\weibo.png" ></a>
               <a href="#"><img src="http://localhost:3000/img\weixin.png" ></a>
               <a href="#"><img src="http://localhost:3000/img\qq.png" ></a>
               <a href="#" class="other">其它</a>
           </div>
       </div>
   </div>
  </div>
</template>
<script>
  export default{
      data(){
          return {
              uname:"",
              upwd:""
          }
      },
      created(){
          this.signin()
      },
      methods:{
          signin(){
              var url="http://localhost:3000/signin";
              this.$http.get(url,{params:{uname:this.uname,upwd:this.upwd}}).then(result=>{
                console.log(result.data);
                if(result.data.ok==0){
                    alert(res.msg)
                }else{
                    alert("登录成功")
                }
                this.$router.push("/")
            })
          }
      }
  }
</script>
<style>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box; 
    text-decoration: none;
}
.wy-login{
   background:#fff;
}
.sign{
    height:900px;
    font-size:14px;
    
    
}
.sign .logo{
    margin-top:-10px;
}
.sign .main{
    margin:50px auto 0;
    background:#f1f1f1;
    width:400px;
    padding-top:50px;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    text-align:center;
}

.sign .main .title{
   padding:50px;
   font-size:18px;
  
}
.sign .main .title .signin{
    color:#ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    font-weight:bold;
    padding:10px;
}
.sign .main .title .reg,.diandian{
    color:#969696;
    font-weight:400;
    padding:10px;
}
.sign .main .login-container .login-first input{
   width:75%;
   height:50px;
   border-radius: 0 0 4px 4px;
   outline: none;
   border:1px solid #c8c8c8;
   padding-left:10px;
   background:hsla(0,0%,71%,.1);
   font-size:15px;
   color:#969696;
}
#first-input{
    border-bottom:none;
    border-radius: 4px 4px 0 0;
}
.sign .main .login-container .remember-btn,.login-forget a{
    float:left;
    margin:15px 48px;
    font-size:15px;
    color:#969696;
}
.sign .main .login-container .remember-btn span{
    margin-left:5px;
}
.sign .main .login-container .login-forget a{
    float:right;

}
.clearfix:after{
    content:"";
    display: block;
    clear:both;
}
.sign .main .login-container .login-btn{
    display:block;
    background:#187cb7;
    color:#fff;
    margin:10px 50px 40px;
    font-size:18px;
    padding:9px 18px;
    border-radius: 25px;
}
.sign .main .other-login{
    padding-bottom:50px;
}
.sign .main .other-login .other-txt{
    color:#b5b5b5;
    font-size:12px;
    margin-bottom:20px;
}
.sign .main .other-login a img{
    vertical-align: middle;
    padding: 0 20px;
    
}
.sign .main .other-login .other{
    vertical-align:middle;
    color:#999;
    font-weight:bold;
   
}
</style>