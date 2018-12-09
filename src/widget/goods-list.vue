<style>
  #goods-list{
    background-color: rgb(243,243,243);
  }
  #goods-list .main{
    padding: 10px 40px 0 40px;
    background-color: white;
  }
  #goods-list .main>div.filter{
    display: flex;
    margin-top: 14px;
    padding-bottom: 14px;
    border-bottom: 1px dashed rgb(231,231,231);
  }
  #goods-list .main>div.filter>span{
    color: #999;
    width: 70px;
  }
  #goods-list .main>div.filter>ul{
    display: flex;
  }
  #goods-list .main>div.filter>ul>li{
    margin-right: 28px;
  }
  #goods-list .main>div.filter>ul>li:hover{
    color: var(--main-color);
    cursor: pointer;
  }


  /*商品列表*/
  #goods-list .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 24px;
  }
</style>
<template>
  <div id="goods-list">
    <div class="margin">
      <goods-list-banner></goods-list-banner>
      <div class="main">
        <div class="filter">
          <span>分类：</span>
          <ul>
            <li>全部</li>
            <li>热销榜单</li>
            <li>行李箱</li>
          </ul>
        </div>

        <div class="filter">
          <span>排序：</span>
          <ul>
            <li>默认</li>
            <li>价格</li>
            <li>上架时间</li>
          </ul>
        </div>
        <div class="list">
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
          <good-basic-info></good-basic-info>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import GoodsListBanner from './../widget/goods-list-banner'
  import GoodBasicInfo from './../widget/good-basic-info'
  export default {
    components:{
      'goods-list-banner': GoodsListBanner,
      'good-basic-info': GoodBasicInfo
    }
  }
</script>
