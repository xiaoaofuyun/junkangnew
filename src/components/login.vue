、<template>
  <div class="loginbg">
    <div class="loginbox">
        <div class="loginbox_logo">
            <img src="../assets/images/login_logo.png">
        </div>
        <ul class="loginbox_ul">
            <li class="loginbox_ul_li">
                <input class="loginbox_ul_li_input inp-fon" type="text" placeholder="请输入OA账号" v-model="userName">
                <div class="loginbox_ul_li_icon on1"></div>
            </li>
            <li class="loginbox_ul_li">
                <input class="loginbox_ul_li_input inp-fon" type="password" placeholder="请输入密码" v-model="password">
                <div class="loginbox_ul_li_icon on2"></div>
            </li>
            <li class="loginbox_ul_li on">
                <input class="loginbox_ul_li_but" ref="login" type="button" value="登录" @click="login">
            </li>
            <li><p class="prompt">{{errorMsg}}</p></li>
        </ul>
    </div>
</div>
</template>
<script>
let qs=require('qs');
import $ from 'jquery'
const jsonp = require('jsonp');
let Base64 = require('js-base64').Base64;
  export default {
    data () {
        return {
          errorMsg: '',
          userName: '',
          password: ''
        }
    },
    created(){

      console.log(this.$route);
      if( typeof(this.$route.query.password)!="undefined"  && typeof(this.$route.query.userName)!="undefined"

){
    // alert("is defined")
      //start

      let that=this;
      this.axios.post('seeyon/menhu.do',{
      //this.axios.post('/api/login',qs.stringify({
        userName: this.$route.query.userName,
        password:this.$route.query.password,
        method:"checkUserInfo"
     },{
        transformRequest:[
          function (data) {
            let params = ''
            for(let index in data) {
              params+=index + '=' + data[index] +'&'
            }
            return params
          }
        ]
      }).then((res)=> {
        console.log(res.data.userInfo.name)
        if(res.data.result ===true){
          let username=Base64.encode(this.userName);
          let password=Base64.encode(this.password);
          alert(res.data.userInfo.name);
          console.log('登录成功')
        //  alert(Base64.decode(that.$route.query.userName));
          // this.$router.push({name: 'index', params: {
          //   userName:username,
          //   password:password}})
          sessionStorage.setItem("dp", res.data.userInfo.departmentName);
          sessionStorage.setItem("un", Base64.decode(that.$route.query.userName));
          sessionStorage.setItem("dz", res.data.userInfo.orgLevel);
           sessionStorage.setItem("up", res.data.userInfo.avatar);
          sessionStorage.setItem("uname", res.data.userInfo.name);
           this.$router.push('index')
        } else {
          this.errorMsg = res.data.msg
        }
      })






     //end
     }else{
     //alert(" is undefined")
     }


    },
    methods: {
      login () {
        // console.log(1);
   //      let url = "http://106.38.29.144:23320/seeyon/menhu.do";
   //    this.$jsonp(url, {
   //
   //     'userName':Base64.encode(this.userName),
   //        'password':Base64.encode(this.password),
   //          'method':"checkUserInfo",
   //
   // }).then(res => {
   //     console.log(2);
   //     alert(1);
   //   }).catch(error => {
   //     console.log(3);
   //   })

        // jsonp('http://106.38.29.144:23320/seeyon/menhu.do',
        //      {
        //      'userName': Base64.encode(this.userName),
        //      'password':Base64.encode(this.password),
        //      'method':"checkUserInfo"
        //      },
        //     function(err,data){
        //       if (err) {
        //                 console.error(err.message);
        //                 }
        //        else {
        //                 console.log(data);
        //             }
        //     })
        // console.log($);
        // $.ajax({
        //       type:'get',
        //       url: 'http://106.38.29.144:23320/seeyon/menhu.do',
        //       data:{
        //            'userName': Base64.encode(this.userName),
        //            'password':Base64.encode(this.password),
        //            'method':"checkUserInfo"
        //             },
        //       dataType:'jsonp',
        //       jsonp: "callback",
        //       jsonpCallback:"handler",
        //       traditional:false,
        //
        //       success: function(result) {
        //         console.log(result);
        //       }
        //     });
        let that=this;
        this.axios.post('seeyon/menhu.do',{
        //this.axios.post('/api/login',qs.stringify({
          userName: Base64.encode(this.userName),
          password:Base64.encode(this.password),
          method:"checkUserInfo"
       },{
          transformRequest:[
            function (data) {
              let params = ''
              for(let index in data) {
                params+=index + '=' + data[index] +'&'
              }
              return params
            }
          ]
        }).then((res)=> {
          console.log(res.data)
          if(res.data.result ===true){
            let username=Base64.encode(this.userName);
            let password=Base64.encode(this.password);
            console.log('登录成功')

            // this.$router.push({name: 'index', params: {
            //   userName:username,
            //   password:password}})
            sessionStorage.setItem("dp", res.data.userInfo.departmentName);
            sessionStorage.setItem("un", that.userName);
            sessionStorage.setItem("dz", res.data.userInfo.orgLevel);
            sessionStorage.setItem("up", res.data.userInfo.avatar);
              sessionStorage.setItem("uname", res.data.userInfo.name);
             this.$router.push('index')
          } else {
            this.errorMsg = res.data.msg
          }
        })
      }
    }
  }
</script>
<style >
.loginbg{
    position: fixed;
    width: 100%;
    height: 100%;
    background: url("../assets/images/login_bg.jpg") center no-repeat;
    background-size: 100% 100%;
}
.loginbox{
    width: 482px;
    position: fixed;
    left: 50%;
    margin-left: -241px;
    top:50%;
    margin-top: -216px;
}
.loginbox_logo{
    width: 100%;
}
.loginbox_logo img{
    width: auto;
    max-width: 100%;
    margin: 20px auto;
}
.loginbox_ul{
    width: 100%;
    margin-top: 55px;
}
.loginbox_ul_li{
    width: 100%;
    margin-bottom: 40px;
    position: relative;
}
.loginbox_ul_li.on{
    margin-bottom: 0;
}
.loginbox_ul_li_input{
    width: 100%;
    background-color: #ffffff;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    border-radius:10px;
    padding: 0 55px 0 20px;
    font-size: 16px;
    color:#5eacfe;
    line-height: 64px;
    height: 64px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    opacity: 0.7;
    box-sizing: border-box;
    /* [;height:64px;line-height:normal;padding:10px 60px 0 20px;]safari hack */
}
.loginbox_ul_li_icon{
    width: 33px;
    height: 32px;
    position: absolute;
    right:20px;
    top:50%;
    margin-top: -16px;
}
.loginbox_ul_li_icon.on1{
     background: url("../assets/images/login_01.png") center no-repeat;
}
.loginbox_ul_li_icon.on2{
    background: url("../assets/images/login_02.png") center no-repeat;
}
.loginbox_ul_li_but{
    width: 100%;
    background-color: #1851ff;
    color:#fff;
    font-size: 18px;
    line-height: 64px;
    text-align: center;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    border-radius:10px;
    cursor: pointer;
}
/* 消息提示 */
.prompt {
  color: red;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>
