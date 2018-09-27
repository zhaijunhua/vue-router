<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家来点餐</h1>
                <h2>这里有大家喜欢的食物</h2>
            </div>
        </div>
        <button @click="goToMenu" class="btn btn-success">order</button>
        <!-- 1.跳转到上一次浏览的页面
         -->
    </div>
</template>
<script>
export default {
    methods:{
        goToMenu(){
            //跳转到上一次浏览的页面，例：点击上面的按钮就会返回到上一次浏览的页面
            // this.$router.go(-1);

            //指定跳转的地址
            // this.$router.replace('/menu');

            //跳转到对应的路由名字下
            // this.$router.replace({name:'menuLink'});

            //通过push跳转(最常用),里面也可以输入是哪个面一样的名字
            this.$router.push('/admin');
                    }
    }    
}
</script>

