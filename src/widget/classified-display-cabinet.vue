<style>
  /*"00": "Bohea",*/
  /*"01": "Green Tea",*/
  /*"02": "White Tea",*/
  /*"03": "Black Tea",*/
  /*"04": "Oolong",*/
  /*"05": "Scented Tea",*/
  /*"06": "Yellow Tea",*/
  /*"07": "Medicinal Tea",*/
  /*"08": "Tea Set",*/
  /*"09": "Other",*/
  .classified-display-cabinet{background-color: #f5f5f5;font-size: 14px}
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
  .classified-display-cabinet>.margin>.box-hd>.top-link{display: flex;align-items: center}
  .classified-display-cabinet>.margin>.box-hd>.top-link>h2{
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .classified-display-cabinet>.margin>.box-hd>.top-link>.sideIcon{width: 8px;height: 22px;background-color: salmon;display: block;margin-right: 8px}
  .classified-display-cabinet>.margin>.box-hd>.more-link{color: black;font-size: 16px;margin-right: 2px;line-height: 58px}
  .classified-display-cabinet>.margin>.box-hd>.more-link>.icon-more{font-size: 20px;line-height: 58px}
  .classified-display-cabinet>.margin>.box-hd>.more-link:hover{color: var(--main-color);cursor: pointer}
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
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    padding: 8px 30px 8px 30px;
  }
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.review-wrapper>div>.review{color: #fff;font-size: 14px}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.review-wrapper>div>.author{color: rgba(255,255,255,0.6);font-size: 14px}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li:hover>.review-wrapper>div{transform: translateY(-35px)}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.saleoff{width: 64px;height: 20px;background-color: #3a8ee6}
  .classified-display-cabinet>.margin>.box-bd>.box-bd-r>li>.figure{width: 150px;height: 150px;background-color: #8c939d}

</style>
<template>
  <div class="classified-display-cabinet">
    <div class="margin">
      <!--box-banner-->
      <!--<img :src="'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/classified-display-cabinet/'+teaLargeclass+'/banner.jpg'" alt="" class="box-banner">-->
      <!--box-hd-->
      <div class="box-hd">
        <div class="top-link">
          <span class="sideIcon" :style="{backgroundColor:sideIconBgc[teaLargeclass]}"></span>
          <h2 style="line-height: 58px">{{$t(teaLargeclass)}}</h2>
        </div>
        <p class="more-link">
          <span>{{$t("classified.display.cabinet.more.link")}}</span>
          <i class="icon-more iconfont"></i>
        </p>
      </div>
      <!--box-bd-->
      <div class="box-bd">
        <ul class="box-bd-l">
          <li :style='{"background-image": "url(http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/classified-display-cabinet/"+teaLargeclass+"/top.jpg)"}'>
          </li>
          <li :style='{"background-image": "url(http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/classified-display-cabinet/"+teaLargeclass+"/bottom.jpg)"}'>
          </li>
        </ul>
        <ul class="box-bd-r">
          <li v-for="(teaDetail,index) of teaDetailsHandle" style="overflow: hidden" @click="goProductDetails(teaDetail)">
            <div class="saleoff" :style='{"background-color": teaDetail.saleoffBgc}'>{{teaDetail.saleoff}}</div>
            <div
              class="figure"
              :style='{
            "background-image": "url("+teaDetail.figure_img+")",
            "background-size": "cover",
            "margin-bottom": "10px"
            }'>
            </div>
            <p style="color: #212121">{{teaDetail.title}}</p>
            <div class="desc">{{teaDetail.desc}}</div>
            <p>
              <span style="color: var(--main-color)">￥{{teaDetail.price}}</span>
              <span style="color: #b0b0b0;text-decoration: line-through">￥{{teaDetail.no_discount_price}}</span>
            </p>

            <div class="review-wrapper">
              <div style="color: black">
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
        url:this.dataInterface,
        phpStaticFilePath:this.phpStaticFilePath,
        sideIconBgc:{
          '00':'rgb(140,34,20)',
          '01':'rgb(176,194,85)',
          '02':'rgb(191,190,164)',
          '03':'rgb(98,85,66)',
          '04':'rgb(212,109,42)',
          '05':'rgb(207,148,52)',
          '06':'rgb(176,37,97)',
          '07':'rgb(118,72,67)',
        }
      }
    },
    props:["teaLargeclass","teaDetails","comment"],
    computed:{
      teaDetailsHandle(){
        if (this.langCode == "zh"){
          let teaDetailsHandleArr = []
          for(let i=0;i<this.teaDetails.length;i++){
            teaDetailsHandleArr.push({
              "classification": JSON.parse(this.teaDetails[i].classification),
              "title":this.teaDetails[i].zh_title,
              "desc":this.teaDetails[i].zh_desc,
              "saleoff":this.handleSaleoff(this.teaDetails[i].saleoff),
              "saleoffBgc": this.handleSaleoffColor(this.teaDetails[i].saleoff),
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
              "classification": JSON.parse(this.teaDetails[i].classification),
              "title":this.teaDetails[i].en_title,
              "desc":this.teaDetails[i].en_desc,
              "saleoff":this.handleSaleoff(this.teaDetails[i].saleoff),
              "saleoffBgc": this.handleSaleoffColor(this.teaDetails[i].saleoff),
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
      },
      handleSaleoffColor(val){
        if (val != ""){
          val = JSON.parse(val)
        }
        let obj = { '1':"rgb(50,131,226)", '2':"rgb(225,49,47)", '3':"rgb(120,188,69)" }
        return obj[ val.saleoff_type]
      },
      goProductDetails(teaDetail){
        this.$router.push({path:'/main/productDetails',query:teaDetail})
      }
    }
  }
</script>
