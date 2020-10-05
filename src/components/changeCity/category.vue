<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>

    <dl
      class="m-categroy-section"
      v-for="(item, index) in cityGroup"
      :key="index"
      :id="'city-' + index"
    >
      <!-- 首字母 -->
      <dt>{{ index }}</dt>
      <!-- 城市 -->
      <dd>
        <span v-for="city in item" :key="city.id">{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: {}
    };
  },
  created() {
    var data = [
      {
        id: 1,
        name: "北京",
        pinyin: "beijing",
        acronym: "bj",
        firstChar: "B",
        rank: "S"
      },
      {
        id: 10,
        name: "上海",
        pinyin: "shanghai",
        acronym: "sh",
        firstChar: "S",
        rank: "S"
      },
      {
        id: 20,
        name: "广州",
        pinyin: "guangzhou",
        acronym: "gz",
        firstChar: "G",
        rank: "A"
      },
      {
        id: 30,
        name: "深圳",
        pinyin: "shenzhen",
        acronym: "sz",
        firstChar: "S",
        rank: "A"
      },
      {
        id: 108,
        name: "珠海",
        pinyin: "zhuhai",
        acronym: "zh",
        firstChar: "Z",
        rank: "C"
      },
      {
        id: 277,
        name: "江门",
        pinyin: "jiangmen",
        acronym: "jm",
        firstChar: "J",
        rank: "C"
      },
      {
        id: 282,
        name: "梅州",
        pinyin: "meizhou",
        acronym: "mz",
        firstChar: "M",
        rank: "E"
      }
    ];
    var obj = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar]) {
        obj[item.firstChar] = [];
      }
      obj[item.firstChar].push(item);
    });
    this.cityGroup = obj;
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>
