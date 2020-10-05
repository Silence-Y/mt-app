<template>
  <div class="m-header">
    <!-- 导航 -->
    <el-row>
      <top-bar />
    </el-row>

    <!-- 搜索框 -->
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>


<script>
import topBar from "./topBar";
import searchBar from "./searchBar";

export default {
  components: {
    topBar,
    searchBar
  }
};
</script>


<style lang="scss">
// @import "@/assets/css/public/header/search.scss";
@import "@/assets/css/public/header/index.scss";
</style>