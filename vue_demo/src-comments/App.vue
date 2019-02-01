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
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/> <!--将指定的方法传递给子类组件标签-->
    </div>
  </div>
</template>
<!--1.导入组件，2映射成标签-->
<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  data () {
    return {
      comments: [
        {
          name: 'lz',
          content: '还不错'
        },
        {
          name: 'cat',
          content: '真简单'
        }
      ]
    }
  },
  components: {
    List,
    Add
  },
  methods:{
    //添加评论
    addComment(comment){
      this.comments.unshift(comment)
    },
    //删除指定下标的评论
    deleteComment(index){
     this.comments.splice(index,1)
    }
  }
}
</script>

<style scoped>

</style>
