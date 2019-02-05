<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFoot :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"/>
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
  methods:{
    addTodo(todo){
      this.todos.unshift(todo);
    },
    deleteTodo(index){
      this.todos.splice(index,1);
    },
    //删除所有已完成的
    deleteCompleteTodos(){
      this.todos = this.todos.filter(todo => !todo.complete) //留下所有没选中的,即为false的
    },
     //全选/全不选
    selectAll(check){ //传递的参数是全选按钮的结果
        this.todos.forEach(todo => todo.complete =check)
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
