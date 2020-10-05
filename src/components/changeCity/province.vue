<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import api from "@/api/index.js";
import MSelect from "./select.vue";
export default {
  data() {
    return {
      provinceList: [
        "山东",
        "甘肃",
        "河北",
        "河南",
        "湖北",
        "湖南",
        "青海",
        "广东",
        "浙江",
        "广西",
        "贵州",
        "云南"
      ],
      province: "省份",
      cityList: ["北京", "上海", "深圳", "武汉", "成都", "广州", "长沙"],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: "",
      loading: false
    };
  },
  created() {
    api.getProductsList().then(res => {
      this.provinceList = res.data.data;
    });
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(value) {
      this.province = value;
    },
    changeCity(value) {
      this.city = value;
    },
    remoteMethod(val) {
      // 请求后端接口
      console.log(document.cookie, localStorage);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>