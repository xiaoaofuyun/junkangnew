<template>
  <div>
    <div class="topbox">
      <div class="logo fl">
          <img class="logo_img" src="../assets/images/logo.png" alt="">
      </div>
      <div class="topbox_div fr">
          <ul class="topbox_div_ul fl">
              <li class="topbox_div_ul_li">
                  <a class="a01" href="http://oa.jklife.com/seeyon/main.do">OA办公</a>
              </li>
              <li class="topbox_div_ul_li">
                  <a class="a02" href="http://10.56.8.3/hec/login.screen">费控系统</a>
              </li>
              <li class="topbox_div_ul_li">
                  <a class="a03" href="http://mail.jklife.com/">邮件系统</a>
              </li>
          </ul>
          <div class="topbox_right_top">
            <ul>
              <li>
                  <a  :href="'http://106.38.29.144:23320/seeyon/newsData.do?method=newsIndex'+'&userName='+nowname" target="_blank">全部新闻</a>
              </li>
              <li >
                    <a :href="'http://106.38.29.144:23320/seeyon/bulData.do?method=bulIndex'+'&userName='+nowname" target="_blank">全部公告</a>
              </li>
            </ul>


          </div>
          <!-- <div class="topbox_div_search fr"> -->
               <!-- <input type="text" value="搜索" class="topbox_div_search_input inp-fon"> -->
              <!-- <div class="topbox_div_search_img"></div>  -->

          <!-- </div> -->
          <div class="clear"></div>
      </div>
    </div>
    <div class="content">
    <div class="contentleft">
        <div class="contentleft_Personal">
            <!-- <div class="contentleft_Personal_anniu">
                <div></div>
                <div></div>
                <div></div>
            </div> -->
            <div class="contentleft_Personal_div">
                <div class="contentleft_Personal_div_touxiang fl">
                    <div class="contentleft_Personal_div_touxiang_img">
                        <!-- <img src="../assets/images/top_02.jpg"> -->
                        <img :src="'http://106.38.29.144:23320'+up">
                    </div>
                    <!-- <div class="contentleft_Personal_div_touxiang_div">3</div> -->
                </div>
                <div class="contentleft_Personal_div_text fl">
                    <h2>{{uname}}</h2>
                    <p>部门：{{dp}}</p>
                    <p>职务：{{dz}}</p>
                </div>
                <div class="clear"></div>
            </div>
            <!-- <div class="contentleft_Personal_but">
                <a class="">账号设置</a>
                <a class="" @click="logout">账号退出</a>
            </div> -->
        </div>
        <div class="contentleft_nav">
            <ul class="contentleft_nav_ul">
                <li class="contentleft_nav_ul_li" @click.prevent="getPath('index')" :class="{on:changeWhite == '0'}" @click="changeClass(0)">
                    <a href="index">
                        <h2 class="contentleft_nav_ul_li_h2"><router-link to='/index'>公司新闻</router-link></h2>
                    </a>
                </li>
                <li class="contentleft_nav_ul_li" @click.prevent="getPath('issued')" :class="{on:changeWhite == '2'}" @click="changeClass(2)">
                    <a href="issued" >
                        <h2 class="contentleft_nav_ul_li_h2">公司发文</h2>
                    </a>
                </li>
                <li class="contentleft_nav_ul_li" @click.prevent="getPath('notice')" :class="{on:changeWhite == '3'}" @click="changeClass(3)">
                    <a href="notice">
                        <h2 class="contentleft_nav_ul_li_h2">工作通知</h2>
                    </a>
                </li>
                <li class="contentleft_nav_ul_li" @click.prevent="getPath('industryul')" :class="{on:changeWhite == '4'}" @click="changeClass(4)">
                    <a href="industry">
                        <h2 class="contentleft_nav_ul_li_h2">行业信息</h2>
                    </a>
                </li>
                <li class="contentleft_nav_ul_li">
                    <a href="#">
                        <h2 class="contentleft_nav_ul_li_h2">走进君康</h2>
                    </a>
                </li>
                <li class="contentleft_nav_ul_li" @click.prevent="getPath('supervise')" :class="{on:changeWhite == '6'}" @click="changeClass(6)">
                   <a href="#">
                       <h2 class="contentleft_nav_ul_li_h2">监察邮箱</h2>
                   </a>
               </li>
            </ul>
        </div>
        <!-- <div class="contentleft_bottom"> -->
            <!-- <div class="contentleft_bottombox"> -->
                <!-- <select> -->
                    <!-- <option>内网</option> -->
                    <!-- <option>公司新闻-公司资讯</option> -->
                    <!-- <option>公司新闻-最新更新</option> -->
                    <!-- <option>行业信息</option> -->
                    <!-- <option>公司发文</option> -->
                    <!-- <option>工作通知</option> -->
                    <!-- <option>文件模板</option>
                    <option>文件模板</option>
                    <option>文件模板</option>
                    <option>文件模板</option> -->
                <!-- </select> -->
                <!-- <div class="contentleft_bottom_bg"></div> -->
            <!-- </div> -->
        <!-- </div> -->
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>

    <div class="links">
    <h2 class="links_h2">友情链接 <a href="http://www.zhongwang.com" target="_blank">中国忠旺官网</a> <a href="http://www.cbrc.gov.cn/chinese/newIndex.html" target="_blank">中国银行保险监督管理委员会</a> <a href="http://www.iachina.cn" target="_blank">中国保险行业协会</a></h2>
</div>
  <div class="weather">
      <div class="weather_div">

          <p class="weather_div_p">
            <select  v-model='province' @change='getprovincecity'>
                           <option :value="item.province" v-for="(item ,index) in citys">{{item.province}}</option>
            </select>
            <select  v-model='citycode'  @change=getweather>
                            <option :value="item.citycode" v-for="(item,index) in provincecity" >{{item.cityname}}</option>
            </select>
            {{currentdate}} &nbsp;      {{forecast.type}} &nbsp; <span>温度：{{forecast.low}}-{{forecast.high}}</span>
           <!-- <span>天气：{{forecast.type}}</span> -->
          </p>
          <!-- <h2 class="weather_div_h2"></h2> -->
          <!-- {{forecast.type}} -->
      </div>
  </div>

</div>
  </div>
</template>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<script>

import $ from 'jquery'


    // $.ajax({
    //   type: 'get',
    // //  url: "http://t.weather.sojson.com/api/weather/city/101020100",
    //   success: function (data){
    //     console.log(data)
    //   }
    // })




  export default {
    data() {
      return {
        changeWhite: 0,
        dp:'',
        dz:'',
        un:'',
        up:'',
        uname:'',
        currentdate:'',
        forecast:'',
        nowname:Base64.encode(sessionStorage.getItem('un')),
        citys:'',
        province:'上海',
        provincecity:'',

        citycode:'101020100',

      }
    },
    methods:{
      // 改变路由的hash值
      getPath(name) {
        // console.log(this)
        // console.log(name)
        this.$router.push(name)
      },
      changeClass(index) {
        this.changeWhite = index
      },
      // 账号退出
      logout () {
        localStorage.removeItem('junkang')
        this.$router.push('login')
      },
      getweather(){
          // console.log(1);
          let that=this;
          // console.log(that.citycode)
          let code=that.citycode
          this.axios.get('http://t.weather.sojson.com/api/weather/city/'+code).then(function(res){
          //  console.log(res);
          res.data.data.forecast[0].low=res.data.data.forecast[0].low.replace('低温','');
          res.data.data.forecast[0].high=res.data.data.forecast[0].high.replace('高温','');
            that.forecast=res.data.data.forecast[0];
          })
      },
      getprovincecity(){
        let that=this
          let cityname=this.province
          console.log(cityname);
          let hostname='http://'+location.host
          this.axios.get(hostname+'/static/data.json',{

          }).then(function(res){

           res.data.citys.forEach(function(item,index){
            //  console.log(item.province);
            if(cityname==item.province){
          // console.log(res.data.citys[index]);
               that.provincecity=res.data.citys[index].city
               // console.log(that.provincecity);
            }
           })




          })

      }
    },
    created(){
      //###############################
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
        console.log(res.data)
        if(res.data.result ===true){
          let username=Base64.encode(this.userName);
          let password=Base64.encode(this.password);
          console.log('登录成功')
          that.dp=res.data.userInfo.departmentName;
          that.dz=res.data.userInfo.orgLevel;
          that.un=Base64.decode(that.$route.query.userName);
          that.up=res.data.userInfo.avatar;
          that.uname=res.data.userInfo.name;
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


      //##############################







      this.dp=sessionStorage.getItem('dp');
      this.dz=sessionStorage.getItem('dz');
      this.un=sessionStorage.getItem('un');
      this.up=sessionStorage.getItem('up');
     this.uname=sessionStorage.getItem('uname');

        let date = new Date();
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
        month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
        }
        this.currentdate = year + seperator1 + month + seperator1 + strDate;
      let that=this;
      this.axios.get('http://t.weather.sojson.com/api/weather/city/101020100').then(function(res){
      //  console.log(res);
      res.data.data.forecast[0].low=res.data.data.forecast[0].low.replace('低温','');
      res.data.data.forecast[0].high=res.data.data.forecast[0].high.replace('高温','');
        that.forecast=res.data.data.forecast[0];

      })
      let hostname='http://'+location.host
      this.axios.get(hostname+'/static/data.json',{

      }).then(function(res){
    //  console.log(res.data);
       that.citys=res.data.citys;
       res.data.citys.forEach(function(item,index){
        //  console.log(item.province);
        if(that.province==item.province){
      // console.log(res.data.citys[index]);
           that.provincecity=res.data.citys[index].city
           // console.log(that.provincecity);
        }
       })
      })



    }
  }
</script>
<style>
body {
  height: 0;
}
.topbox{
    width: 100%;
    position: fixed;
    left: 0;
    top:0;
    min-width: 1200px;
}
.logo{
    width:300px;
    background-color: #c81528;
    padding: 25px 0;
    position: relative;
    z-index: 2;
}
.logo_img{
    width: auto;
    margin: 0 auto;
}
.topbox_div{
    width: 100%;
    height: 90px;
    background: url("../assets/images/top_01.jpg ") center no-repeat;
    padding: 25px 35px 25px 335px;
    background-size: 100% 100%;
    position: absolute;
    z-index: 1;
}
.topbox_div_ul{
    text-align: left;
    min-width: 570px;
}
.topbox_div_ul_li{
    display: inline-block;
    margin: 0 3%;
}
.topbox_div_ul_li a{
    font-size: 15px;
    color:#555;
    line-height: 39px;
    padding-left: 45px;
    height: 39px;
    -webkit-border-radius:39px;
    -moz-border-radius:39px;
    border-radius:39px;
}
.topbox_div_ul_li a.a01{
    background: url("../assets/images/top_01.png") left center no-repeat;
}
.topbox_div_ul_li a.a02{
    background: url("../assets/images/top_02.png") left center no-repeat;
}
.topbox_div_ul_li a.a03{
    background: url("../assets/images/top_03.png") left center no-repeat;
}
.topbox_div_ul_li a.a01:hover{
    background: url("../assets/images/top_01_1.png") left center no-repeat;
}
.topbox_div_ul_li a.a02:hover{
    background: url("../assets/images/top_02_1.png") left center no-repeat;
}
.topbox_div_ul_li a.a03:hover{
    background: url("../assets/images/top_03_1.png") left center no-repeat;
}

.topbox_div_search{
    width: 236px;
    background: rgba(255,255,255,0.79);
    position: relative;
}
.topbox_div_search_input{
    box-sizing:border-box;
    width: 236px;
    border: none;
    font-size: 14px;
    color:#333;
    line-height: 38px;
    height: 38px;
    padding: 0 40px 0 10px;
    /* [;height:37px;line-height:normal;padding:10px 40px 0 10px;]safari hack */
}
.topbox_div_search_img{
    width: 20px;
    height: 20px;
    background: url("../assets/images/top_04.png") center no-repeat;
    position: absolute;
    right: 10px;
    top:9px;
}

.content{
    width: 100%;
}
.contentleft{
    width: 300px;
    position: fixed;
    left: 0;
    top:90px;
    height:869px;
    background: #555560;
    min-width: 240px;
    /* overflow-y: auto; */
    overflow: hidden;

}
.contentleft_Personal{
    background: url("../assets/images/top_05.png")  center no-repeat;
    background-size: 100% 100%;
    padding: 20px 0 0 0;
    position: relative;
}
/* .contentleft_Personal_anniu{
    position: absolute;
    top:20px;
    right: 10px;
    width: 30px;
    cursor: pointer;
} */
/* .contentleft_Personal_anniu div{
    width: 100%;
    height: 2px;
    background-color: #ccc;
    margin: 4px 0;
} */
.contentleft_Personal_div{
    width: 280px;
    padding-top: 25px;
    padding-bottom: 25px;
    box-sizing: border-box;
    margin: 0 auto;
}
.contentleft_Personal_div_touxiang{
    width: 60px;
    position: relative;
    margin:0px 20px 0px 30px;
    top: 12px;
}
.contentleft_Personal_div_touxiang_img{
    width:60px;
    -webkit-border-radius:60px;
    -moz-border-radius:60px;
    border-radius:60px;
    overflow: hidden;
}
.contentleft_Personal_div_touxiang_img img{
    width: 100%;
}
.contentleft_Personal_div_touxiang_div{
    width: 20px;
    height: 20px;
    color:#fff;
    background-color: #333;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    position: absolute;
    right: 10px;
    top:-2px;
    -webkit-border-radius:20px;
    -moz-border-radius:20px;
    border-radius:20px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    cursor: pointer;
}
.contentleft_Personal_div_touxiang_div:hover{
    background-color: #c81528;
}
.contentleft_Personal_div_text{
    width: 160px;
}
.contentleft_Personal_div_text h2{
    font-size: 24px;
    color:#fff;
    line-height: 40px;
    font-weight: bold;
}
.contentleft_Personal_div_text p{
    font-size: 12px;
    color:#ffffff;
    line-height: 20px;
    opacity: 0.55;
}
.contentleft_Personal_but{
    width: 100%;
    text-align: center;
    padding-bottom: 30px;
}
.contentleft_Personal_but a{
    width: 40%;
    height: 30px;
    font-size: 14px;
    color:#fff;
    opacity: 0.55;
    line-height: 30px;
    background: url("../assets/images/top_06.png") left center no-repeat;
    padding-left: 20px;
    display: inline-block;
    text-align: left;
}

.contentleft_nav{
    width: 100%;
    margin-bottom: 70px;
}
.contentleft_nav_ul{
    width: 100%;
}
.contentleft_nav_ul_li{
    width: 100%;
    padding: 7px 0;
    border-bottom: 1px solid #ccc;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
}
.contentleft_nav_ul_li_h2{
    font-size: 16px;
    color:#fff;
    line-height: 30px;
    text-align: center;
    background: url("../assets/images/top_08.png") 65px center  no-repeat;
    opacity: 0.62;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
}
/* 选中的样式 */
.contentleft_nav_ul_li.on {
     background-color: #74747d;
     border-top: 1px solid transparent;
    border-bottom: 1px solid #ccc;
}
.contentleft_nav_ul_li.on .contentleft_nav_ul_li_h2{
    font-weight: bold;
    opacity: 1;
}

.contentleft_bottom{
    width: 222px;
    background-color: #6e6e79;
    height: 37px;
    position: fixed;
    left: 29px;
    bottom: 20px;
}
.contentleft_bottombox{
    position: relative;
    width: 100%;
}
.contentleft_bottom select{
    width: 100%;
    height: 37px;
    font-size: 16px;
    color:#a1a1aa;
    line-height: 37px;
    padding: 0 10px;
    border: none;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    background-color: #6e6e79;
}
select::-ms-expand { display: none; }
.contentleft_bottom_bg{
    width: 19px;
    height: 37px;
    background: url("../assets/images/top_09.png")  center  no-repeat;
    position: absolute;
    right: 10px;
    top:0;
}

.contentright{
    width: 100%;
    height: 869px;
    padding-left: 300px;
    background: -webkit-linear-gradient(#f2f9fb, #d7f1fa) no-repeat; /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#f2f9fb, #d7f1fa) no-repeat; /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#f2f9fb, #d7f1fa) no-repeat; /* Firefox 3.6 - 15 */
    background: linear-gradient(#f2f9fb, #d7f1fa) no-repeat; /* 标准的语法（必须放在最后） */
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType = 0, startColorstr = #f2f9fb, endColorstr = #d7f1fa);
    /* position: absolute; */
    left: 0;
    top:90px;
    margin-top:90px;
    z-index:-1;
    overflow-y: auto;
    min-width: 1200px;
}
.contentright_box{
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
}
.contentright_box_left{
    width: 64%;
    margin-right: 6%;
}
.contentright_box_right{
    width: 30%;
}

.contentright_box_left_title{
    width: 100%;
    padding: 20px 0;
}
.contentright_box_left_title h2{
    font-size: 18px;
    font-weight: bold;
    color:#000;
    line-height: 30px;
}
.contentright_box_left_title a{
    font-size: 13px;
    color:#555560;
    line-height: 30px;
}

.contentright_box_left_ul{
    width: 100%;
}
.contentright_box_left_ul_li{
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}
.contentright_box_left_ul_li:hover{
  color: red
}
.contentright_box_left_ul_li_date{
    width: 100px;
    border-right: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    margin-right: 15px;
}
.contentright_box_left_ul_li_date h2{
    font-size: 24px;
    color:#333;
    line-height: 30px;
}
.contentright_box_left_ul_li_date p{
    font-size: 14px;
    color:#333;
    line-height: 24px;
}
.contentright_box_left_ul_li_conetet h2{
    font-size: 16px;
    color:#000000;
    font-weight: bold;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.contentright_box_left_ul_li_conetet p{
    font-size: 14px;
    color:#666;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.contentright_box_left_ul_li.on{
    background-color: #e5f2f6;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    border-bottom: none;
    padding: 0;
}
.contentright_box_left_ul_li.on .contentright_box_left_ul_li_img{
    width: 45%;
}
.contentright_box_left_ul_li.on .contentright_box_left_ul_li_img img{
    width: 100%;
}
.contentright_box_left_ul_li.on .contentright_box_left_ul_li_text{
    width: 55%;
    padding: 3% 5%  0 5%;
    box-sizing: border-box;
}
.contentright_box_left_ul_li.on .contentright_box_left_ul_li_text h2{
    font-weight: bold;
    font-size: 16px;
    color:#000;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.contentright_box_left_ul_li.on .contentright_box_left_ul_li_text h3{
    font-size: 14px;
    color:#c81528;
    line-height: 25px;
}
.contentright_box_left_ul_li.on .contentright_box_left_ul_li_text p{
    line-height: 24px;
    font-size: 14px;
    color:#666666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.contentright_box_left_ul_li:hover .contentright_box_left_ul_li_conetet_h2{
    color:#c81528;
}
.contentright_box_left_ul_li.on:hover .contentright_box_left_ul_li_text_h2{
    color:#c81528;
}


.contentright_box_right_ul{
    width: 100%;
}
.contentright_box_right_ul_li{
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    cursor: pointer;
}
.contentright_box_right_ul_li_h2{
    width: 100%;
    height: 45px;
    background: url("../assets/images/top_04.jpg") left center no-repeat;
    font-size: 16px;
    font-weight: bold;
    line-height: 45px;
    padding-left: 60px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.contentright_box_right_ul_li_div{
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    color:#666;
    line-height: 24px;
}
.contentright_box_right_ul_li_div p{
    color:#666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.contentright_box_right_ul_li.on .contentright_box_right_ul_li_h2{
    border-bottom: 1px solid #ccc;
    background: url("../assets/images/top_05.jpg") left center no-repeat;
}
.topbox_right_top{

  height:40px;
  text-align: right;


}
.topbox_right_top ul{
  float:right;
  diplay:inline-block;
}
.topbox_right_top ul li a{
  color:#555;
}
.topbox_right_top ul li{
  float:left;
  display:inline-block;
  margin-left: 20px;
  line-height: 40px;


}
.links{
    width: 100%;
    position: fixed;
    left: 350px;
    bottom: 20px;
    height:70px;
    margin-left: -45px;
    margin-bottom: -30px;
     /* background-image:url('/static/img/top_01.dfeb2e1.jpg'); */
     background:#E6E6E6;
    padding:5px;
    opacity: 0.9;
    /* line-height: 70px; */
}
.links_h2{
    font-size: 14px;
    /* color:#a4a4a4; */
      color:#555555;
    line-height: 50px;
}

.links_h2 a{
    display: inline-block;
    margin: 0 5px;
    font-size: 14px;
    /* color:#a4a4a4; */
    color:#555555;
    line-height: 30px;
}
</style>
