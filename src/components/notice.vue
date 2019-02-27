<template>
  <div>
    <div class="contentright">
        <div class="contentright_box">
            <div class="issuedbox">
                <div class="issuedbox_title">
                    <h2 class="issuedbox_title_h2">工作通知</h2>
                </div>
                <ul class="issuedbox_ul">
                    <li class="issuedbox_ul_li" v-for="(item,index) in noticeList" :key="index">
                          <!-- <router-link :to="{path:'/noticedetail',query: {id:item.link}}"> -->
                        <a :href="'http://106.38.29.144:23320'+item.link+'&userName='+userName" target="_blank">
                            <div class="issuedbox_ul_li_date fl">
                                <h2>{{item.publishDate.split(' ')[0].split('-')[item.publishDate.split(' ')[0].split('-').length-1]}}</h2>
                                <p>{{item.publishDate.split(' ')[0].slice(0,7)}}</p>
                            </div>
                            <div class="issuedbox_ul_li_text">
                                <h2>{{item.title}}</h2>
                                <p>发布部门：<span>{{item.publishDepartmentName}}</span>  <span class="issuedbox_ul_li_text_p_span"> | </span>  发布范围：<span>{{item.publishDepartmentName}}</span></p>
                            </div>
                            <div class="clear"></div>
                            <a class="issuedbox_ul_li_a">查看详情</a>
                        <!-- </router-link> -->
                      </a>
                    </li>
                    <!-- <li class="issuedbox_ul_li">
                        <a>
                            <div class="issuedbox_ul_li_date fl">
                                <h2>08</h2>
                                <p>2018-07</p>
                            </div>
                            <div class="issuedbox_ul_li_text">
                                <h2>紧急应对普吉岛翻船事故 君康人寿开通理赔绿色通道</h2>
                                <p>发布部门：<span>业务部</span>  <span class="issuedbox_ul_li_text_p_span"> | </span>  发布范围：<span>业务部</span></p>
                            </div>
                            <div class="clear"></div>
                            <a class="issuedbox_ul_li_a">查看详情</a>
                        </a>
                    </li> -->
                </ul>
                <div class="issuedbox_more">
                    <a :href="'http://106.38.29.144:23320/seeyon/bulData.do?method=bulIndex&typeId=2&spaceType=&spaceId='+'&userName='+userName" target="_blank">查看更多</a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
let Base64 = require('js-base64').Base64;
export default {
  data () {
    return {
      noticeList:[], //工作通知的数据
      userName:Base64.encode(sessionStorage.getItem('un')),
    }
  },
  methods: {
    // 获取工作通知的数据
    getNotice () {
        this.axios.get('/seeyon/menhu.do?method=getBulData&typeId=2&offset=0&limit=5')
      // this.axios.get('/seeyon/menhu.do?method=getBulData')
          .then(res => {
            const {items} = res.data
            items.forEach(item => {
              item.show = false
              item.changeRed = false
              // item.link=item.link.split("id=")[1];
            })
            console.log(res.data)
            this.noticeList = res.data.items.slice(0,5)
            })
        }
    },
    created () {
      this.getNotice()
    },
  }

</script>

<style>

</style>
