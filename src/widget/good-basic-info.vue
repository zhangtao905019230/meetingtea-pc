<style>
  .good-basic-info{
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*background-color: salmon;*/
    padding-bottom: 50px;
    transition: .3s;
  }
  .good-basic-info:hover{
    transform: translateY(-5px);
    transition: .3s;
  }
  .good-basic-info>div:nth-child(1)>img{
    transition: .3s;
    cursor: pointer;
  }
  .good-basic-info:hover>div:nth-child(1)>img{
    transform: scale(1.1,1.1);
    transition: .3s;
  }
  .good-basic-info>div:nth-child(1){
    background-color: rgb(242,242,242);
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .good-basic-info>span:nth-child(2){
    background-color: #e36844;color: #fff;font-size: 12px;padding: 0 5px 0 5px;margin-top: 5px;

  }
  .good-basic-info>span:nth-child(3):hover{
    color: var(--main-color);
    cursor: pointer;
  }
  .good-basic-info>span:nth-child(3){
    line-height: 24px
  }

  .good-basic-info>p:nth-child(4){
    line-height: 28px
  }
  .good-basic-info>i{
    width: 150px;border-bottom: 1px solid rgb(242,242,242);margin-top: 5px
  }

  .good-basic-info>span:nth-child(6){
    margin-top: 10px;color: #999;font-size: 12px
  }
</style>
<template>
  <div class="good-basic-info">
    <div>
      <img src="https://yanxuan.nosdn.127.net/fe06530dd35ec5062c1ecaf82d4812d6.png?imageView&quality=95&thumbnail=245x245" alt="">
    </div>
    <span>心跳价</span>
    <span>20寸 磨砂PC膜拉链登机箱</span>
    <p>
      <span style="color: #e36844">￥35</span>
      <span style="color: #999">￥49</span>
    </p>
    <i></i>
    <span>如羽毛般丰盈质感，温暖一整个冬季</span>
  </div>
</template>
