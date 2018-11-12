<template>
  <div id="main">
    <site-nav></site-nav>
    <header-component></header-component>
    <tab-nav></tab-nav>
    <category-type></category-type>
    <sidebar-component></sidebar-component>
    <router-view></router-view>
    <end></end>
  </div>
</template>
<script>
  import SiteNav from './../widget/site-nav'
  import HeaderComponent from "../widget/header-component"
  import End from "../widget/end"
  import TabNav from './../widget/tab-nav'
  import CategoryType from "../widget/category-type"
  import SidebarComponent from "./../widget/sidebar-component"
  export default {
    components:{
      'site-nav': SiteNav,
      'header-component': HeaderComponent,
      'tab-nav': TabNav,
      'category-type':CategoryType,
      'sidebar-component': SidebarComponent,
      'end': End,
    }
  }
</script>
