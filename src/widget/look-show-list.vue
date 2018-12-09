<style>
  .look-show-list{
    width: 286px;
    box-shadow: 0 0 18px 0 rgba(0,0,0,.05);
    border-radius: 10px;
    transition: .3s;
    padding-top: 10px;

    break-inside: avoid;
  }
  .look-show-list:hover{
    transform: translateY(-5px);
    transition: .3s;
    box-shadow: 0 0 30px 0 rgba(0,0,0,.1);
  }
  .look-show-list .wrap{
    padding: 10px;
  }
  .look-show-list .author{
    display: flex;justify-content: space-between
  }
  .look-show-list .author>div:nth-child(1){
    display: flex;
    /*justify-content: center;*/
    align-items: center;
  }
  .look-show-list .author>div:nth-child(1)>img{
    margin-right: 10px;
    width: 36px;height: 36px;border-radius: 50%
  }

  .comment{
    border-top: 1px solid #ccc;
    font-size: 12px;
    line-height: 24px;
    padding-top: 5px;
  }
  .comment>span,.comment .user-name{
    color: #999;
  }
</style>
<template>
  <div class="look-show-list" :style="{paddingTop:pt+'px'}">
    <img style="cursor: pointer;" width="100%" src="https://s3.mogucdn.com/mlcdn/c45406/181207_61aj216dbbaig20ali4e6eib91g7a_1080x1660.jpg_600x800.v1cAC.70.webp" alt="">
    <div class="wrap">
      <div class="author">
        <div>
          <img src="https://s17.mogucdn.com/mlcdn/5abf39/180623_3gcgea777l6kga4gci1e1716445j3_400x400.jpg_80x999.v1c96.70.webp" alt="">
          <span>林胖胖</span>
        </div>

        <div style="text-align: center">
          <i class="icon-collection iconfont"></i>
          <p>收藏</p>
        </div>
      </div>

      <p style="color: #507daf;margin-top: 10px">#150cm如何穿成170cm#</p>
      <p style="color: #507daf">#pk赛#</p>
      <p style="margin-bottom: 5px">我在广州穿这样完全没问题，露脚踝和侧边开叉的裤子完全无压力。</p>

      <div class="comment">
        <span>共有四条评论</span>
        <ul>
          <li>
            <span class="user-name">桃花级：</span><span>哈哈哈</span>
          </li>
          <li>
            <span  class="user-name">青青草原：</span><span>老气？</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['pt']
  }
</script>
