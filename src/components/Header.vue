<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" class="navbar-brand">点餐系统</a>
            <ul class="navbar-nav">
               
                <!-- <li><router-link to="/" class="nav-link">主页</router-link></li> -->
                <!-- 动态绑定路径 -->
                <!-- <li><router-link :to="homeLink" class="nav-link">主页</router-link></li> -->
                <!-- 属性绑定模式 -->
                <li><router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link></li>
                <li><router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link></li>
                <li><router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link></li>
                <li><router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link></li>
            </ul>
            <ul class="navbar-nav ml-auto">
               
                <li><router-link to="Login" class="nav-link">登录</router-link></li>
                <li><router-link to="Register" class="nav-link">注册</router-link></li>
               <!--使用router-link to可以避免不必要的跳转 router-link可以进行自定义标签类型，默认为a标签
                    在里面加入tag，可以写入标签类型
                    2.to可以               -->
            </ul>
        </nav>
        
    </header>
    
</template>
<script>
export default {
    name:'Header',
    data(){
        return {
            homeLink:'/'
        }
    }
}
</script>

<style scoped>

</style>
