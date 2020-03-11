<template>
  <div class="container">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
  @import '@/lib/reset.scss';
  body,html,.container{
    @include rect( 100% , 100% )
  }
  .container{
    @include flexbox();
    @include flex-direction(column);
    @include rect( 100% , auto )
    .box {
      @include flex();
      @include rect( 100% , auto );
      .header{
        @include rect( 100% , 0.44rem );
        @include background-color(#f66);
        @include flexbox();
        ul{
          @include rect( 100% , 100% );
          @include flexbox();
          @include color(#fff);
          li{
            @include flexbox();
            @include align-items(center);
            &:nth-child(1),&:nth-child(3){
              @include flex-direction(column);
              @include justify-content(center);
              @include rect(50px , 100% )
            }
            &:nth-child(2){
              @include flex();
              @include background-color(#fff);
              @include color(#666);
              @include margin(10px);
              @include padding(0 15px);
              @include border-radius(15px);
            }
          }
        }
      }
      .content{
         @include flex();
         @include rect( 100% , 4.75rem );
         @include overflow(auto);
      }
    }
    .footer {
      @include rect( 100% , 0.5rem );
      @include background-color(#efefef);
      ul{
        @include rect( 100% , 100% );
        @include flexbox();
        li{
          @include flex();
          @include flexbox();
          @include flex-direction(column);
          @include justify-content(center);
          @include align-items(center);
          span{
            @include font-size(0.2rem);
            @include color(#333)
          }
          p{
            @include color(#333)
          }
          &.router-link-exact-active.router-link-active{
            span{
              @include color(#f66)
            }
            p{
              @include color(#f66)
            }
          }
        }
      }
    }
  }
</style>
