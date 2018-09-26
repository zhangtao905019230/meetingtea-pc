<style>
  #end>.t-wrap{background-color: rgb(244,244,244)}
  #end>.t-wrap>.margin>.title{height: 50px;position: relative;text-align: center}
  #end>.t-wrap>.margin>.title>span{font-size: 18px;line-height: 50px;color: #ccccd0}
  #end>.t-wrap>.margin>.title>span:before{
    content: ' ';
    position: absolute;
    height: 0;
    line-height: 0;
    border-top: 1px solid #e6e6e6;
    width: 60px;
    top: 50%;
    left: 42%;
  }
  #end>.t-wrap>.margin>.title>span:after{
    content: ' ';
    position: absolute;
    height: 0;
    line-height: 0;
    border-top: 1px solid #e6e6e6;
    width: 60px;
    top: 50%;
    left: 53%
  }
  #end>.t-wrap>.margin>.helper{display: flex;height: 190px}
  #end>.t-wrap>.margin>.helper>li{width: 256px;padding: 0 25px 0 25px}
  #end>.t-wrap>.margin>.helper>li>h4>i{font-size: 32px;line-height: 64px;color: #999;margin-top: 10px}
  #end>.t-wrap>.margin>.helper>li>h4>span{font-size: 16px;line-height: 32px;color: #3C3C3C;font-weight: 700;}
  #end>.t-wrap>.margin>.helper>li>ul{overflow: hidden;}
  #end>.t-wrap>.margin>.helper>li>ul>li{float: left;margin-right: 14px;font-size: 12px;font-weight: 100;color: #999;line-height: 28px}
  #end>.t-wrap>.margin>.helper>li>ul>li:hover{color: #F40}
  #end>.b-wrap>.margin>.friendship-link{border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;padding: 8px 0 8px 0}
  #end>.b-wrap>.margin>.friendship-link>span{color: #DDD;line-height: 24px}
  #end>.b-wrap>.margin>.friendship-link>span>a{color: #999;font-size: 12px}
  #end>.b-wrap>.margin>.friendship-link>span>a:hover{color: #F40}
  #end>.b-wrap>.margin>.footer{color: #999;text-align: center;line-height: 24px;font-size: 12px}
</style>
<template>
  <div id="end">
    <div class="t-wrap">
      <div class="margin">
        <div class="title">
          <span>END</span>
        </div>
        <ul class="helper">
          <li v-for="(helperData,index) of helperDatas" :key="index">
            <h4>
              <i class="iconfont icon-baohu"></i>
              <span>{{helperData.type}}</span>
            </h4>
            <ul  class="ul-li_a">
              <li v-for="(link,index) of helperData.link" :key="index">{{link}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="b-wrap">
      <div class="margin">
        <p class="friendship-link">
          <span v-for="(friendshipLinkData,index) of friendshipLinkDatas">
            <a :href="friendshipLinkData.website" target="_blank">{{friendshipLinkData.name}}</a>
            &nbsp;|&nbsp;
          </span>
        </p>
        <p class="footer">© 2003-现在 meetingtea.top 版权所有</p>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        helperDatas:[
          {type:'消费者保障',link:['保障范围','退款退货流程','服务中心','更多特色服务']},
          {type:'新手上路',link:['新手专区','消费预警','交易安全','24小时在线帮助','免费开店']},
          {type:'付款方式',link:['快捷支付','信用卡','余额宝','蚂蚁花呗','货到付款']},
          {type:'淘宝特色',link:['手机淘宝','旺旺/旺信','大众评审']},
          ],
        friendshipLinkDatas:[
          {name:'百度',website:'https://www.baidu.com/'},
          {name:'淘宝',website:'https://www.baidu.com/'},
          {name:'腾讯',website:'https://www.baidu.com/'},
          {name:'高德',website:'https://www.baidu.com/'},
          {name:'UC',website:'www.taobao.com'},
          {name:'优酷',website:'www.taobao.com'},
          {name:'土豆',website:'www.taobao.com'},
          {name:'支付宝',website:'www.taobao.com'},
          {name:'微信',website:'www.taobao.com'},
          {name:'大麦网',website:'www.taobao.com'},
          {name:'虾米',website:'www.taobao.com'},
          {name:'新浪',website:'www.taobao.com'},
          {name:'阿里云',website:'www.taobao.com'},
        ]
      }
    }
  }
</script>
