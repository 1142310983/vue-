<template>
    <div class="box">
      <header class="header">
        <ul>
          <li>logo</li>
          <li><span class="iconfont icon-fangdajing"></span> 请输入要查找的商品</li>
          <li>消息</li>
        </ul>
      </header>
      <div class="content">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
           <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <router-link
              :to="{name:'detail',params:{ proid:item.proid } }"
              v-for="(item, index) in prolist"
              :key="index"
            >
              <van-card
                :price="item.price"
                :desc="item.note"
                :title="item.proname"
                :thumb="item.proimg"
              />
            </router-link>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload, Swipe, SwipeItem, Card, PullRefresh, Toast, List } from 'vant'
import { getbannerlist, getprolist } from "../../api/home"
Vue.use(Card)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(PullRefresh)
Vue.use(Toast)
Vue.use(List)
export default {
  data() {
    return {
      images: [],
      prolist:[],
      isLoading: false,
      pageCode:1, //页码
      finished:false, //还有数据
      loading:false    //true表示正在下拉加载下一列数据
    }
  },
  methods:{
    onRefresh() {
      this.isLoading = true
      getprolist( {url:"/pro"} ).then(res=>{
        this.prolist = res.data.data
        this.isLoading = false
        this.pageCode = 1
        this.finished = false
      })
    },
    onLoad(){
      this.loading = true
      getprolist({
          url:"pro",
          data:{
            pageCode:this.pageCode
          }
        } ).then(res=>{
          this.loading = false
          this.pageCode++
        if(res.data.code === "10000" ){
          this.finished = true
        } else {
          this.prolist = [...this.prolist,...res.data.data]
        }
      })
    }
  },
  mounted () {
    getbannerlist({url:"/pro/banner"}).then(data=>{
      let arr = []
      data.map(item=>{
        arr.push("http://daxun.kuboy.top" + item) 
      })
      this.images = arr
    }),
    getprolist( {url:"/pro"} ).then(res=>{
      this.prolist = res.data.data
    })
  }
}
</script>
<style lang="scss">
.van-swipe{
  max-height:200px;
  img{
    width:100%;
  }
}
</style>