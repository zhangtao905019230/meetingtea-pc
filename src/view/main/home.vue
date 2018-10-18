<template>
  <div id="home">
    <floor-nav></floor-nav>
    <banner></banner>
    <four-small-banners></four-small-banners>
    <classified-display-cabinet tea-largeclass="00" :tea-details="teaDetails[0]" :comment="comment"></classified-display-cabinet>
    <classified-display-cabinet tea-largeclass="01" :tea-details="teaDetails[1]" :comment="comment"></classified-display-cabinet>
    <classified-display-cabinet tea-largeclass="02" :tea-details="teaDetails[2]" :comment="comment"></classified-display-cabinet>
    <classified-display-cabinet tea-largeclass="03" :tea-details="teaDetails[3]" :comment="comment"></classified-display-cabinet>
    <classified-display-cabinet tea-largeclass="04" :tea-details="teaDetails[4]" :comment="comment"></classified-display-cabinet>
    <classified-display-cabinet tea-largeclass="05" :tea-details="teaDetails[5]" :comment="comment"></classified-display-cabinet>
    <classified-display-cabinet tea-largeclass="06" :tea-details="teaDetails[6]" :comment="comment"></classified-display-cabinet>
    <classified-display-cabinet tea-largeclass="07" :tea-details="teaDetails[7]" :comment="comment"></classified-display-cabinet>
  </div>
</template>
<script>
  import HeaderComponentX from "../../del/header-component-x"
  import LogoAndSearchComponent from "../../del/logo-and-search-component"
  import BannerComponent from "../../del/banner-component"
  import Banner from './../../widget/banner'
  import ClassifiedDisplayCabinet from "../../widget/classified-display-cabinet"
  import FourSmallBanners from "../../widget/four-small-banners"
  import FloorNav from "../../widget/floor-nav"
  import GetGoodsInfor from "../../service/get-goods-infor"

  export default {
    components: {
      'header-component-x': HeaderComponentX,
      'logo-and-search-component': LogoAndSearchComponent,
      'banner-component': BannerComponent,
      'banner': Banner,
      'classified-display-cabinet': ClassifiedDisplayCabinet,
      'four-small-banners': FourSmallBanners,
      'floor-nav': FloorNav
    },
    data(){
      return {
        teaDetails:[
          this.initTeaDetails(),this.initTeaDetails(),this.initTeaDetails(),this.initTeaDetails(),
          this.initTeaDetails(),this.initTeaDetails(),this.initTeaDetails(),this.initTeaDetails()
        ],
        // categoryListSideIconBgc:[],
        comment:Array(8).fill({
          review:"很好",
          author:"张涛"
        })
      }
    },
    mounted(){
      this.getEightHotGoods()
    },
    methods:{
      initTeaDetails(){
        let teaDetails = []
        for (let i=0;i<8;i++){
          teaDetails.push({
            "classification": "{}",
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
        return teaDetails
      },
      getEightHotGoods(){
        GetGoodsInfor.GetEightHotGoods(this.dataInterface).then(res => {
          let arr = ['00','01','02','03','04','05','06','07']
          for (let j=0;j<8;j++){
            for (let i=0;i<8;i++){
              this.teaDetails[j][i].classification = res[arr[j]][i].classification
              this.teaDetails[j][i].zh_title = res[arr[j]][i].zh_title
              this.teaDetails[j][i].zh_desc = res[arr[j]][i].zh_desc
              this.teaDetails[j][i].en_title = res[arr[j]][i].en_title
              this.teaDetails[j][i].en_desc = res[arr[j]][i].en_desc
              this.teaDetails[j][i].saleoff = res[arr[j]][i].saleoff
              this.teaDetails[j][i].figure_img = res[arr[j]][i].figure_img
              this.teaDetails[j][i].price = res[arr[j]][i].price
              this.teaDetails[j][i].no_discount_price = res[arr[j]][i].no_discount_price
            }
          }
        })
      }
    }
  }
</script>
