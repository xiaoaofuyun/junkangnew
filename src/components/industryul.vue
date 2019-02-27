<template>
  <div>
    <ul class="industry_ul">
      <li class="industry_ul_li" v-for="(item,index) in informationList" :key="index">
            <a :href="'http://106.38.29.144:23320'+item.link+'&userName='+userName" target="_blank">
              <div class="industry_ul_li_img fl">
                  <!-- <img :src="'http://106.38.29.144:23320'+item.imgUrl"> -->
                  <img :src="'http://106.38.29.144:23320/seeyon/fileUpload.do?method=showRTE&createDate=&type=image&_isModalDialog=true&openFrom='+'&fileId='+item.imgUrl">

              </div>
              <div class="industry_ul_li_text">
                  <h2 class="industry_ul_li_text_h2">{{item.title}}</h2>
                  <p class="industry_ul_li_text_p">{{item.brief}}</p>
                  <p class="industry_ul_li_text_p1">时间：<span>{{item.publishDate.split(' ')[0]}}</span>   <span>|</span>  部门：<span>{{item.publishDepartmentName}}</span></p>
              </div>
              <div class="clear"></div>
              <a href="industrypage" class="industry_ul_li_a" @click.prevent="getPath('industrypage')">查看详情</a>
          </a>
      </li>
      <!-- <li class="industry_ul_li">
          <a>
              <div class="industry_ul_li_img fl">
                  <img src="../assets/images/industry_02.jpg">
              </div>
              <div class="industry_ul_li_text">
                  <h2 class="industry_ul_li_text_h2">君康人寿启用全新品牌标识</h2>
                  <p class="industry_ul_li_text_p">1月30日，君康人寿保险股份有限公司下称,1月30日，君康人寿保险股份有限公司下称1月30日，君康人寿保险股份有限公司下称.君康人寿保险股...</p>
                  <p class="industry_ul_li_text_p1">时间：<span>2018-07-09</span>   <span>|</span>  部门：<span>总部管理中心</span></p>
              </div>
              <div class="clear"></div>
              <a href="industrypage.html" class="industry_ul_li_a">查看详情</a>
          </a>
      </li> -->
    </ul>
  <div class="issuedbox_more">


    <a :href="'http://106.38.29.144:23320/seeyon/newsData.do?method=newsIndex&spaceType=&spaceId=&boardId=2'+'&userName='+userName" target="_blank">查看更多</a>
  </div>
  </div>
</template>

<script>
let Base64 = require('js-base64').Base64;
export default {

  data () {
    return {
      informationList: [],
        userName:Base64.encode(sessionStorage.getItem('un')),
    }
  },
  methods: {
    getPath(name) {
      console.log(name)
      this.$router.push(name)
    },
    getIndustry() {
    //  this.axios.get('/seeyon/menhu.do?method=getNewsList&typeId=-5242019997787930570&offset=0&limit=4')
    this.axios.get('/seeyon/menhu.do?method=getNewsList&typeId=2&offset=0&limit=4')

      .then(res => {
        console.log(res.data)
        const {items} = res.data
        items.forEach(item => {

          item.imgUrl=item.imgUrl.split("id=")[1];
        })
        this.informationList = res.data.items
      })
    }
  },
  created() {
    this.getIndustry()
  }
}
</script>

<style>

</style>
