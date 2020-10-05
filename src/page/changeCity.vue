<template>
  <div class="page-changeCity">
    <!-- 省份选择 -->
    <el-row>
      <province />
    </el-row>

    <!-- 热门城市 -->
    <el-row>
      <hot title="热门城市:" :list="hotList" />
    </el-row>

    <!-- 最近访问 -->
    <el-row>
      <hot title="最近访问:" :list="rencentList" />
    </el-row>

    <!-- 城市列表 -->
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
import Province from "@/components/changeCity/province";
import hot from "@/components/changecity/hot";
import Category from "@/components/changeCity/category";
export default {
  data() {
    return {
      hotList: [],
      rencentList: []
    };
  },
  created() {
    api.getCityList().then(res => {
      this.hotList = res.data.data.map(item => item.name);
    });
    api.getRecentCity().then(res => {
      this.rencentList = res.data.data.map(item => item.name);
    });
  },
  components: {
    Province,
    hot,
    Category
  }
};
</script>