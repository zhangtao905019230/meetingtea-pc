<style>
  #site-nav{
    background-color: #333;
    font-size: 12px;
    padding: 9px 0 9px 0;
  }
  #site-nav a{
    color: #ccc;
  }
  #site-nav a:hover{
    color: #fff;
  }
  /*#site-nav>.margin>a{*/
    /*line-height: 36px;*/
  /*}*/
  #site-nav>.margin>div>ul>li{
    border-right: 1px solid rgb(82,82,82);
    padding: 0 10px 0 10px;
  }

  #site-nav .el-dropdown{font-size: 12px;color: #ccc;height: 14px}
</style>
<template>
  <div id="site-nav">
    <div class="margin" style="display: flex;justify-content: space-between">
      <a>遇茶，遇见最好的你。</a>
      <div>
        <ul style="display: flex">
          <!--<li><a href="">登录</a></li>-->
          <li>
            <a href="" style="margin-right: 10px">登录</a>
            <a href="">注册</a>
          </li>
          <li>
            <el-dropdown>
              <a class="el-dropdown-link">
                18158899797<i class="el-icon-arrow-down el-icon--right"></i>
              </a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>优惠券</el-dropdown-item>
                <el-dropdown-item>礼品卡</el-dropdown-item>
                <el-dropdown-item>我的收藏</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <a href="">消息</a>
          </li>
          <li><a href="">我的订单</a></li>
          <li>
            <el-dropdown>
              <a class="el-dropdown-link">
                客户服务<i class="el-icon-arrow-down el-icon--right"></i>
              </a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>在线服务</el-dropdown-item>
                <el-dropdown-item>帮助中心</el-dropdown-item>
                <el-dropdown-item>商务合作</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
