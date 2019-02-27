<template>
  <div>
    <div class="industrypage" >
      <div class="industrypage_title">
          <h2 class="industrypage_title_h2">{{articleList.title}}</h2>
          <p class="industrypage_title_p">时间：<span>{{articleList.createDate}}</span><span class="industrypage_title_p_span">|</span>部门：<span>{{articleList.publishDepartmentName}}</span><span class="industrypage_title_p_span">|</span>关键字：<span>君康人寿</span></p>
      </div>
      <div class="industrypage_box">
          <!-- <p>据人民日报微博7月6日凌晨消息，7月5日下午，两艘载有中国游客的游船分别在泰国普吉府珊瑚岛和梅通岛发生翻船事故，两艘船搭载的133名游客中有127名中国游客。截至7月6日凌晨4时，事故造成1名中国游客溺亡，76名中国游客获救，另有53人失踪（其中50人为中国公民）。</p>
          <p>获悉事故发生后，为应对可能发生的客户理赔情况，君康人寿第一时间成立应急处理组，启动重大突发事件应急预案，具体服务举措如下：</p>
          <p>一、第一时间安排人员核查出险情况、伤亡人数、损失状况，做好出险人员名单收集及承保情况核查工作，并积极配合政府做好应急处理工作。</p>
          <p>二、开通24小时客服热线400-889-3311</p>
          <p>三、开通理赔绿色通道。</p>
          <p>1.	免提供保单原件；</p>
          <p>2.	受伤人员取消定点医院就诊限制；</p>
          <p>3.	如有不幸身故的客户，可凭政府公布的死亡名单申请身故理赔；</p>
          <p>四、推出特殊关爱行动</p>
          <p>1.	一切以积极抢救客户为先，简化理赔流程手续；</p>
          <p>2.	医疗险取消免赔额、赔付比例以及自费药物的限制，尽量为客户减少损失。</p>
          <p>君康人寿将持续、密切关注本次事故的最新进展，在配合政府做好应急处理工作的同时，积极做好相关客户服务工作。</p> -->
          {{articleList.brief}}
      </div>
    </div>
    <!-- {{articleList}} -->
  </div>
</template>

<script>
import $ from 'jquery'
export default {

  data () {
    return {
      articleList: [] ,//公司发文数据,

    }
  },
  methods: {
    // getPath(name) {
    //   console.log(name)
    //   this.$router.push(name)
    // },
    getArticledetail(){
      let id=this.$route.query.id;
      console.log(id);
      let that=this;
      this.axios.get('/seeyon/menhu.do?method=getBulData')
      .then(res => {


        res.data.items.slice(0,5).forEach(item => {
           if(id==item.link.split("id=")[1])
            {
             that.articleList=item;
           }


        })


        })

    }

  },created() {
    this.getArticledetail()
  }
}
</script>

<style>

</style>
