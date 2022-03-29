<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <el_table/>
    <hr>
    <el_form/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import el_table from './components/el_table.vue'
import el_form from './components/add_car.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    el_table,
    el_form
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 5%;
}
</style>
