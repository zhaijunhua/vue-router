<template>
  <div id="app">
    <div class="container">
        <app-header></app-header>
        <div>
          <router-view></router-view>
        </div>
    </div>
    <div class="container">
        <div class="col-sm-12 col-md-4">
            <router-view name="ordering"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
            <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
            <router-view name="history"></router-view>
        </div>
        <!-- router-view复用，需要在router.js中进行写入模板 -->
    </div>
    
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'app',
  components:{
    appHeader:Header    //因为命名冲突，所以在进行组件明明是时需要重新设置，使用驼峰方式不需要加引号
  }
}
</script>

<style>

</style>
