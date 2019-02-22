<style scoped>
  .personal-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px 20px 20px;
    background-color: white;
    border-radius: 4px;
  }
  .avatar-container img{
    border-radius: 50%;
  }
  .presonal-info{
    margin-top: 16px;
  }
  .presonal-info a{
    color: #333;
    font-size: 16px;
    font-weight: 600;
  }
  .presonal-info a:hover{
    color: #d36f16;
  }
  .position-info span {
    font-size: 12px;
    color: #bbb;
  }
  .btn-area{
    margin-top: 20px;
    color: #444;
    background-color: var(--main-color);
    border-radius: 4px;
    cursor: pointer;
    display: block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    width: 100%;
    text-align: center;
  }

  .personal-menu{
    margin-top: 10px;
    background-color: white;
    border-radius: 4px;
  }
  .menu-list li{
    height: 52px;
    padding: 0 30px;
    line-height: 52px;
    position: relative;
    cursor: pointer;
  }
  .menu-list li:hover{
    background-color: var(--main-color);
  }
  .menu-list li i.active{
    width: 3px;
    height: 32px;
    background-color: var(--main-color);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .line{
    border-bottom: 1px solid rgb(244,244,244);
  }
</style>
<template>
  <div class="container-area-left">
    <div class="personal-card">
      <div class="avatar-container">
        <img :src="src" alt="">
      </div>
      <div class="presonal-info">
        <a href="">zhangtao25</a>
      </div>
      <div class="position-info">
        <span>上海&nbsp;|&nbsp;设计爱好者</span>
      </div>
      <div class="btn-area">
        <span>开始创作</span>
      </div>
    </div>
    <div class="personal-menu">
      <ul class="menu-list">
        <li class="line">
          <i class="active"></i>
          <span>我的关注</span>
        </li>
        <li>
          <i></i>
          <span>我的创作</span>
        </li>
        <li class="line">
          <i></i>
          <span>我的收藏</span>
        </li>
        <li class="line">
          <i></i>
          <span>我的统计</span>
        </li>
        <li>
          <i></i>
          <span>资料与账号</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        src:'https://img.zcool.cn/community/0150145c696f4ca801203d22de704b.jpg@80w_80h_1c_1e_1o_100sh.jpg'
      }
    }
  }
</script>
