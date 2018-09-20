<template>
  <div id="home">
    <header-component></header-component>
    <logo-and-search-component></logo-and-search-component>
    <category-list></category-list>
    <banner-component></banner-component>
    <four-small-banners></four-small-banners>
    <classified-display-cabinet
      :tea-details="testTeaDetails"
      :comment="comment"
      :commodityDisplayCabinetPoster="[
      ':8080/elfinder/files/images/commodityDisplayCabinetPoster/greentea0.jpg',
      ':8080/elfinder/files/images/commodityDisplayCabinetPoster/greentea1.jpg',
      ':8080/elfinder/files/images/commodityDisplayCabinetPoster/greentea_banner.jpg'
      ]"
    >
    </classified-display-cabinet>

  </div>
</template>
<script>
  import HeaderComponent from "./../components/header-component"
  import LogoAndSearchComponent from "./../components/logo-and-search-component"
  import CategoryList from "./../components/category-list"
  import BannerComponent from "./../components/banner-component"
  import ClassifiedDisplayCabinet from "./../components/classified-display-cabinet"
  import FourSmallBanners from "./../components/four-small-banners"
  import GetGoodsInfor from "../service/get-goods-infor"
  import axios from 'axios'

  export default {
    components: {
      'header-component': HeaderComponent,
      'logo-and-search-component': LogoAndSearchComponent,
      'category-list': CategoryList,
      'banner-component': BannerComponent,
      'classified-display-cabinet': ClassifiedDisplayCabinet,
      'four-small-banners': FourSmallBanners
    },
    data(){
      return {
        testTeaDetails:this.init(),
        comment:Array(8).fill({
          review:"很好",
          author:"张涛"
        })
      }
    },
    mounted(){
      this.init()
      GetGoodsInfor.GetEightHotGoods(this.dataInterface).then(res => {
        for (let i=0;i<8;i++){
          this.testTeaDetails[i].zh_title = res[i].zh_title
          this.testTeaDetails[i].zh_desc = res[i].zh_desc
          this.testTeaDetails[i].en_title = res[i].en_title
          this.testTeaDetails[i].en_desc = res[i].en_desc
          this.testTeaDetails[i].saleoff = res[i].saleoff
          this.testTeaDetails[i].figure_img = res[i].figure_img
          this.testTeaDetails[i].price = res[i].price
          this.testTeaDetails[i].no_discount_price = res[i].no_discount_price
        }
      })
    },
    methods:{
      init(){
        let testTeaDetails = []
        for (let i=0;i<8;i++){
          testTeaDetails.push({
            "zh_largeclass": "",
            "zh_smallclass":"",
            "zh_title":"",
            "zh_desc":"",
            "saleoff":"",
            "en_largeclass": "",
            "en_smallclass":"",
            "en_title":"",
            "en_desc":"",
            "price":"",
            "nodiscountprice":"",
            "figure_img":""
          })
        }
        return testTeaDetails
      }
    }
  }
</script>
