<template>
  <div class="layout-default">
    <el-container>
      <!-- 头部 -->
      <el-header height="">
        <my-header />
      </el-header>

      <!-- 中间 -->
      <el-main>
        <!-- 嵌套路由 -->
        <router-view></router-view>
      </el-main>

      <!-- 尾部 -->
      <el-footer height="">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from "@/components/header/index";
import myFooter from "@/components/footer/index";

export default {
  components: {
    myHeader,
    myFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
