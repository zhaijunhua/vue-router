<template>
  <div id="app">
    <div class="container">
        <app-header></app-header>
        <div>
          <transition :name="transitionName">
          <router-view></router-view>
          </transition>
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
  },
  data(){
    return {
      transitionName:''
    }
  },
  //监听$router的变化
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  }


  // created(){
  //   fetch('http://www.thenewstep.cn/test/testToken.php',{
  //     method:'post',
  //     body:'hello world'
  //   }).then(result=>{
  //     console.log(result);
  //   })
  // }
}
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 3000ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
