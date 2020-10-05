<template>
  <div class="page-product">
    <!-- 面包屑 -->
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>

    <el-row>
      <!-- 筛选区 -->
      <el-col :span="19">
        <!-- 目录 -->
        <el-row>
          <categroy />
        </el-row>
        <!-- 列表 -->
        <el-row>
          <list />
        </el-row>
      </el-col>

      <!-- 地图 -->
      <el-col :span="5">
        map + fav
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from "@/components/products/crumbs.vue";
import Categroy from "@/components/products/categroy.vue";
import List from "@/components/products/list.vue";
export default {
  components: {
    crumbs,
    Categroy,
    List
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>