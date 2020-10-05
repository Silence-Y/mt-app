<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <!-- 跳转到不同的路由，动态路由 -->
              <router-link to="{name:'goods',params:{name:item}}">{{
                item
              }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <!-- 跳转到不同的路由，动态路由 -->
              <router-link to="{name:'goods',params:{name:item}}">{{
                item
              }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item, index) in suggestList" :key="index">{{
            item
          }}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    };
  },
  created() {
    // 进行axios请求，已经封装好的
    api.searchHotWords().then(res => {
      // console.log(res);
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    });
  },
  computed: {
    // 是否显示热门搜索，多个属性控制一个属性
    isHotPlace: function() {
      // 聚焦但是不输入值，就显示热门搜索
      return this.isFocus && !this.searchWord;
    },
    // 是否显示搜索列表，
    isSearchList: function() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input() {
      let val = this.searchWord;
      api.getSearchList().then(res => {
        // console.log(res);
        console.log("refdsfs");
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        });
      });
    }
  }
};
</script>

<style lang="scss">
// @import "@/assets/css/public/header/search.scss";
// @import "@/assets/css/public/header/index.scss";
</style>