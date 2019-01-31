<template>
  <div >
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add/>
      <List/>
    </div>
  </div>
</template>
<!--1.导入组件，2映射成标签-->
<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  components: {
    List,
    Add
  }
}
</script>

<style scoped>

</style>
