<template>
    <div>
        <!-- 二级导航和三级导航 -->
        <div class="row mb-5">
            <div class="col-4">
            <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                <a class="list-group-item list-group-item-action">历史订单</a>
            </router-link>
            <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
                <a class="list-group-item list-group-item-action">联系我们</a>
            </router-link>
            <router-link tag="li" class="nav-link" :to="{name:'orderingLink'}">
                <a class="list-group-item list-group-item-action">点餐列表</a>
            </router-link>
            <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
                <a class="list-group-item list-group-item-action">信息</a>
            </router-link>
            </div>

            <div class="col-8">
                <router-view></router-view>
            </div>
            
        </div>
        
    </div>
</template>
