<style>
  .classified-display-cabinet{background-color: #f5f5f5}
  .classified-display-cabinet>.margin{overflow: hidden}
  .classified-display-cabinet>.margin>img{width: 1226px;display: block;margin: 42px 0 42px 0;}
  .classified-display-cabinet>.margin>.box-hd{display: flex;justify-content: space-between}
  .classified-display-cabinet>.margin>.box-hd>.nav{display: flex;margin-top: 20px;cursor: pointer}
  .classified-display-cabinet>.margin>.box-hd>.nav>li{
    height: 26px;
    margin-left: 30px;
    color: #000;
    border-bottom: 2px solid rgba(0,0,0,0);
    transition-property: border-color;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    }
  .classified-display-cabinet>.margin>.box-hd>.nav>li:hover{
    margin-left: 30px;
    color: #ff6700;
    border-bottom: 2px solid #ff6700;
  }
  .classified-display-cabinet>.margin>.box-hd>h2{
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .classified-display-cabinet>.margin>.box-hd>.more-link{color: black;font-size: 16px;margin-right: 2px;line-height: 58px}
  .classified-display-cabinet>.margin>.box-hd>.more-link>.icon-more{font-size: 20px;line-height: 58px}
  .classified-display-cabinet>.margin>.box-hd>.more-link:hover{color: #ff6600;cursor: pointer}
  .classified-display-cabinet>.margin>.box-bd{display: flex}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-l>li{
    width: 234px;height: 300px;
    background-color: #3a8ee6;
    margin-right: 14px;
    background-size: cover;
    background-position: center;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    transition-delay: 0s;
  }
  .classified-display-cabinet>.margin>.box-bd>.box-bd-l>li:nth-child(1){margin-bottom: 14px;}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-l>li:hover{
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    cursor: pointer;
  }
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r{
    height: 614px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li{
    overflow: hidden;
    width: 234px;height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    transition-delay: 0s;
  }
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.desc{font-size: 12px;color: #b0b0b0;margin-bottom: 14px}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.saleoff{text-align: center;color: white;margin-bottom: 16px}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li:hover{
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    cursor: pointer;
  }
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.review-wrapper{height: 0;width: 234px}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.review-wrapper>div{
    transform: translateY(32px);
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    transition-delay: 0s;
    width: 174px;height: 59px;
    background-color: #ff6700;
    display: flex;
    flex-direction: column;
    padding: 8px 30px 8px 30px;
  }
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.review-wrapper>div>.review{color: #fff;font-size: 12px}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.review-wrapper>div>.author{color: rgba(255,255,255,0.6);font-size: 12px}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li:hover>.review-wrapper>div{transform: translateY(-35px)}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.saleoff{width: 64px;height: 20px;background-color: #3a8ee6}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.figure{width: 150px;height: 150px;background-color: #8c939d}

</style>
<template>
  <div class="classified-display-cabinet">
    <div class="margin">
      <!--box-banner-->
      <img :src="url+commodityDisplayCabinetPoster[2]" alt="" class="box-banner">
      <!--box-hd-->
      <div class="box-hd">
        <h2 style="line-height: 58px">{{$t("00")}}</h2>
        <p class="more-link">
          <span>{{$t("classified.display.cabinet.more.link")}}</span>
          <i class="icon-more iconfont"></i>
        </p>
      </div>
      <!--box-bd-->
      <div class="box-bd">
        <ul class="box-bd-l">
          <li :style='{"background-image": "url("+url+commodityDisplayCabinetPoster[0]+")"}'>
          </li>
          <li :style='{"background-image": "url("+url+commodityDisplayCabinetPoster[1]+")"}'>
          </li>
        </ul>
        <ul class="box-bd-r">
          <li v-for="(teaDetail,index) of teaDetailsHandle" style="overflow: hidden">
            <div class="saleoff">{{teaDetail.saleoff}}</div>
            <div
              class="figure"
              :style='{
            "background-image": "url("+teaDetail.figure_img+")",
            "background-size": "cover",
            "margin-bottom": "10px"
            }'>
            </div>
            <p>{{teaDetail.title}}</p>
            <div class="desc">{{teaDetail.desc}}</div>
            <p>
              <span style="color: #ff6700">￥{{teaDetail.price}}</span>
              <span style="color: #b0b0b0;text-decoration: line-through">￥{{teaDetail.no_discount_price}}</span>
            </p>

            <div class="review-wrapper">
              <div>
                <span class="review">{{comment[index].review}}</span>
                <span class="author">{{$t("classified.display.cabinet.from",{name:comment[index].author})}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        url:this.dataInterface
      }
    },
    props:["teaDetails","comment","commodityDisplayCabinetPoster"],
    computed:{
      teaDetailsHandle(){
        if (this.langCode == "zh"){
          let teaDetailsHandleArr = []
          for(let i=0;i<this.teaDetails.length;i++){
            teaDetailsHandleArr.push({
              "title":this.teaDetails[i].zh_title,
              "desc":this.teaDetails[i].zh_desc,
              "saleoff":this.handleSaleoff(this.teaDetails[i].saleoff),
              "price":this.teaDetails[i].price,
              "no_discount_price":this.teaDetails[i].no_discount_price,
              "figure_img":this.teaDetails[i].figure_img
            })
          }
          return teaDetailsHandleArr
        } else {
          let teaDetailsHandleArr = []
          for(let i=0;i<this.teaDetails.length;i++){
            teaDetailsHandleArr.push({
              "title":this.teaDetails[i].en_title,
              "desc":this.teaDetails[i].en_desc,
              "saleoff":this.handleSaleoff(this.teaDetails[i].saleoff),
              "price":this.teaDetails[i].price,
              "no_discount_price":this.teaDetails[i].no_discount_price,
              "figure_img":this.teaDetails[i].figure_img
            })
          }
          return teaDetailsHandleArr
        }
      },
      ...mapGetters(["langCode"])
    },
    mounted(){
    },
    methods:{
      handleSaleoff(val){
        if (val != ""){
          val = JSON.parse(val)
        }
        if (this.langCode == "zh"){
          if (val.saleoff_type==1){
            return '立减'+ val.saleoff_value['1'] +'元'
          }else if (val.saleoff_type==2) {
            return '享'+ val.saleoff_value['2'] +'折'
          }else {
            return '新品'
          }
        } else {
          if (val.saleoff_type==1){
            return 'Reduce'+ val.saleoff_value['1'] +'yuan'
          }else if (val.saleoff_type==2) {
            return val.saleoff_value['2'] +'percent off'
          }else {
            return 'New product'
          }
        }
      }
    }
  }
</script>
