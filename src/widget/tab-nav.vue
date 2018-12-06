<style>
  .tab-nav a{
    color: #333;
    display: block;
  }
  .tn-category-list{
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .tn-category-list>li{
    padding: 20px 30px 0px 30px;
    cursor: pointer;
    text-align: center;
  }
  .tn-category-list>li>span{
    display: block;
    color: #333;
    font-weight: 700;
    line-height: 2;
    border-bottom: 3px solid white;
  }
  .tn-category-list>li>img{
    width: 18px;
    height: 10px;
    position: relative;
    z-index: 20000;
    opacity: 0;
  }
  .tn-category-list>li:hover>span{
    border-bottom: 3px solid var(--main-color);
    color: var(--main-color);
  }
  .tn-category-list>li>.sub_cat_ul{
    background-color: white;
    position: absolute;
    top: 65px;
    z-index: 1000;
    display: none;
    justify-content: space-between;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.1);
    cursor: default;
    opacity: 0;
  }
  .tn-category-list>li>.sub_cat_ul>img{
    position: absolute;
    top: -12px;
  }
  .tn-category-list>li:nth-child(2)>.sub_cat_ul{left: 0;}
  .tn-category-list>li:nth-child(3)>.sub_cat_ul{left: 0;}
  .tn-category-list>li:nth-child(4)>.sub_cat_ul{left: 0;}
  .tn-category-list>li:nth-child(5)>.sub_cat_ul{left: 300px;}
  .tn-category-list>li:nth-child(6)>.sub_cat_ul{right: 0;}
  .tn-category-list>li:nth-child(7)>.sub_cat_ul{right: 200px;}
  .tn-category-list>li:nth-child(8)>.sub_cat_ul{right: 0;}
  .tn-category-list>li:nth-child(9)>.sub_cat_ul{right: 0;}
  .tn-category-list>li>.sub_cat_ul>li{
    padding: 24px;
  }
  .tn-category-list>li>.sub_cat_ul>li>a{
    line-height: 32px;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }
  .tn-category-list>li>.sub_cat_ul>li>.sub_cat_ul{
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 1px solid #ddd;
  }
  .tn-category-list>li>.sub_cat_ul>li>.sub_cat_ul>li{
    display: flex;
    align-items: center;
    color: #333;
  }
  .tn-category-list>li>.sub_cat_ul>li>.sub_cat_ul>li:hover{
    color: var(--main-color);
    cursor: pointer;
  }
</style>
<template>
  <div class="tab-nav">
    <div class="margin">
      <ul class="tn-category-list sub_cat_ul1">
        <li @click="goToHome"><span>首页</span></li>
        <li
          v-for="(item,index) of allMenuLabel.results"
          @click="goToCategoryList"
          :key="index">
          <span>{{item.name}}</span>
          <img class="arrow" src="../assets/icon/small-arrow.png" alt="">
          <ul class="sub_cat_ul sub_cat_ul2">
            <li v-for="(item,index) of item.sub_cat" :key="index">
              <a>{{item.name}}</a>
              <ul class="sub_cat_ul sub_cat_ul3">
                <li v-for="(item,index) of item.sub_cat" :key="index">
                  <img style="width: 50px;height: 50px" src="https://yanxuan.nosdn.127.net/f14322b575accf7ef8ca5d023c09b11a.png" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li @click="goToTeaCulture"><span>茶文化</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { getCategory } from '../api/api'
  export default {
    data(){
      return{
        allMenuLabel:[]
      }
    },
    mounted(){
      this.getMenu();
      this.JQStyleFunction();
    },
    methods:{
      goToHome(){
        this.$router.push({path:'/main/home'})
      },
      goToTeaCulture(){
        this.$router.push({path:'/main/tea-culture'})
      },
      goTo(path,index){
        console.log(path)
      },
      goToCategoryList(){
        this.$router.push({path:'/main/category-list'})
      },
      getMenu(){
        getCategory({
          params:{}
        }).then((response)=> {
          console.log(response.data)
          this.allMenuLabel = response.data
        })
          .catch(function (error) {
            console.log(error);
          });
      },
      JQStyleFunction(){
        setTimeout(()=>{
          $(".tn-category-list li").hover(function(){
            $(this).find('.sub_cat_ul2').css({display:'flex'})
            $(this).find('.arrow').css({opacity:1})
            $(this).find('.sub_cat_ul2').animate({opacity:1},200)
          },function(){
            $(this).find('.arrow').css({opacity:0})
            $(this).find('.sub_cat_ul2').animate({opacity:0},200,function () {
              $(this).css({display:'none'})
            })
          });
        },1000)
      }
    }
  }
</script>
