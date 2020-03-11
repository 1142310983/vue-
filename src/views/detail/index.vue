<template>
    <div class="container detail">
      <div class="box">
        <header class="header">
          <button @click="getBack">←</button>
          <div class="headername">{{proname}}</div>
        </header>
        <div class="content">
          <div class="proimg"><img :src="proimg"></div>
          <h1 class="proname">{{proname}}</h1>
          <div>{{note}}</div>
          <div>{{price}}</div>
        </div>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="service" />
        <van-goods-action-icon icon="cart-o" text="购物车"  />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买"  />
      </van-goods-action>
    </div>
</template>

<script>
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { getDetailData } from "../../api/detail"
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
    data(){
      return {
        proname:"",
        price:"",
        note:"",
        proimg:""
      }
    },
    methods:{
      getBack(){
        this.$router.back()
      },
      service(){
        _MEIQIA('init');
        _MEIQIA('showPanel');
      }
    },
    mounted(){
      const { proid } = this.$route.params
      getDetailData({
        url:"/pro/detail",
        data: {
          proid
        }
      }).then(res=>{
        const { proname, price, note, proimg } = res.data.data
        this.proname = proname
        this.price = price
        this.note = note
        this.proimg = proimg
      }) 
    }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
  .detail{
    .header{
      @include flexbox();
      @include justify-content(left)
      @include align-items(center)
      @include color(#fff)
      .headername{
        @include margin(0 0.5rem );
      }
      button{
        @include rect(0.3rem, 0.3rem );
        @include background-color(#f66);
        border:none
      }
    }
  }
  .proimg{
    @include rect(100%, 50%)
    img{
      @include rect(100%, 100%)
    }
  }
  .proname{
    @include font-size(0.2rem)
  }
</style>