<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList :todos="todos"/>
      <TodoFoot/>
    </div>
  </div>
</template>

<script>
import TodoHeader from  './components/TodoHeader.vue'
import TodoFoot  from  './components/TodoFoot.vue'
import TodoList from './components/TodoList.vue'
export default {
  data(){
    return{
     todos:[
       {title:'吃饭 ',complete:false},
       {title:'睡觉 ',complete:true},
       {title:'coding ',complete:false},
     ]
    }
  },
   components:{
     TodoList,
     TodoFoot,
     TodoHeader
   }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
