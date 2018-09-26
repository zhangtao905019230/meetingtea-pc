<template>
  <div id="main">
    <header-component></header-component>
    <logo-and-search-component></logo-and-search-component>
    <category-list></category-list>
    <router-view></router-view>
    <end></end>
  </div>
</template>
<script>
  import HeaderComponent from "./../components/header-component"
  import End from "./../components/end"
  import LogoAndSearchComponent from "./../components/logo-and-search-component"
  import CategoryList from "./../components/category-list"
  export default {
    components:{
      'header-component': HeaderComponent,
      'end': End,
      'logo-and-search-component': LogoAndSearchComponent,
      'category-list': CategoryList,
    }
  }
</script>
