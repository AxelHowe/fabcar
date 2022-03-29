<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="key"
        label="KEY"
        width="180">
      </el-table-column>
      <el-table-column
        prop="make"
        label="MAKE"
        width="180">
      </el-table-column>
      <el-table-column
        prop="model"
        label="MODEL">
      </el-table-column>
      <el-table-column
        prop="color"
        label="COLOR">
      </el-table-column>
      <el-table-column
        prop="owner"
        label="OWNER">
      </el-table-column>
      <el-table-column
        label="change owner">edit
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            key: 'error',
            make: 'error',
            model: 'error',
            color: 'error',
            owner: 'error',
          }, {
            key: 'error',
            make: 'error',
            model: 'error',
            color: 'error',
            owner: 'error',
          }]
        }
      },
      methods: {
          async packageGetData() {
          const url = 'cars'  // json-server  API 位置
          let res = await this.$api.get(url)
          this.tableData = [...res]  // 透過ES6語法將res的內容直接繼承到tableData
          console.log(res)
          console.log("===========")
          console.log(this.tableData)
        },
      },

      created() {
        this.packageGetData() // 在created 階段把API資料叫進來
      }
    }
</script>