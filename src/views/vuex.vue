<template>
  <div id="vuex">
    <div class="margin">
      token:{{token}}
      <br>
      user_avatar:{{user_avatar}}
      <br>
      user_phone:{{user_phone}}
    </div>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed:{
      ...mapGetters(['token','user_phone','user_avatar'])
    }
  }
</script>
<style>
  #vuex>.margin{
    width: 1000px;
    margin: 0 auto;
  }
</style>
