<style>
  .proinfo-main{width: 822px;padding-left: 20px}
  .proinfo-main>.title{font-size: 20px;font-weight: bold;line-height: 2em;color: #222}
  .proinfo-main>.desc{font-size: 14px;color: #666;line-height: 2em;padding-bottom: 14px}
  .proinfo-main>ul{border-top: 1px dotted #ddd;padding: 14px 0 14px 0}
  .proinfo-main>ul>li>span:nth-child(1){color: #999;font-size: 14px;line-height: 2em;width: 100px;display: inline-block}
  .proinfo-main>ul>li>span:nth-child(2){color: #666;font-size: 14px;line-height: 2em}
  .proinfo-main>ul>li.price>span:nth-child(2){font-size: 24px;color: var(--main-color);font-weight: bolder}
  .proinfo-main>.btn{
    background-color: var(--main-color);
    width: 198px;height: 46px;
    font-size: 18px;
    border-radius: 3px;
    color: white;
    line-height: 46px;
    text-align: center;
    margin-left: 100px;
    margin-top: 20px;
    cursor: pointer;
  }
</style>
<template>
  <div class="proinfo-main">
    <p class="title">{{teaDetail.title}}</p>
    <p class="desc">{{teaDetail.desc}}</p>
    <ul>
      <li class="no-discount-price">
        <span class="label">市场价</span>
        <span>￥{{teaDetail.no_discount_price}}</span>
      </li>
      <li class="price">
        <span>遇茶价</span>
        <span>￥{{teaDetail.price}}</span>
      </li>
    </ul>
    <ul>
      <li>
        <span>品牌</span>
        <span>天池</span>
      </li>
      <li>
        <span>净含量</span>
        <span>50克</span>
      </li>
      <li>
        <span>商品编号</span>
        <span>8685034</span>
      </li>
    </ul>
    <ul>
      <li>
        <span>数量</span>
        <el-input-number size="small" v-model="shuliang" :min="1" :max="10" label="描述文字"></el-input-number>
      </li>
    </ul>
    <div class="btn">
      加入购物袋
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        shuliang:1
      }
    },
    props:['teaDetail'],
    methods:{
    }
  }
</script>

