<template>
  <div class="addcar">
    <p>Add Car</p>
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="KEY(e.g. CAR12)">
        <el-input v-model="form.key"></el-input>
      </el-form-item>
      <el-form-item label="MAKE(e.g. Lexus)">
        <el-input v-model="form.make"></el-input>
      </el-form-item>
      <el-form-item label="MODEL(e.g. NX 200t)">
        <el-input v-model="form.model"></el-input>
      </el-form-item>
      <el-form-item label="COLOR">
        <el-input v-model="form.color"></el-input>
      </el-form-item>
      <el-form-item label="OWNER">
        <el-input v-model="form.owner"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增汽車</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        key: "",
        make: "",
        model: "",
        color: "",
        owner: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form.name);
      this.post_Data();
    },
    async post_Data() {
      const url = "cars"; // json-server  API 位置
      const params = {
        'key': this.form.key,
        'make': this.form.make,
        'model': this.form.model,
        'color': this.form.color,
        'owner': this.form.owner,
      };
      console.log(params)
      //   let res = await this.$api.post(url)
      let res = [];
      res = await this.$api.post(url,params);
      //   let res = [1]
      //   this.$post(url)
      this.tableData = [...res]; // 透過ES6語法將res的內容直接繼承到tableData

      console.log(res);
      console.log("--===========post");
      console.log(this.tableData);
    },
  },
};
</script>