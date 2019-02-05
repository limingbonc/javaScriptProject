<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeSize>0" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: "TodoFoot",
       props:{
         todos:Array,
         deleteCompleteTodos:Function,
         selectAll:Function
       },
       //已完成的数量需要进行统计
        computed:{  //计算属性
          completeSize(){ //计算选中为true的
            return this.todos.reduce((preTotal, todo) => preTotal+(todo.complete?1:0),0) //reduce对数组中所有元素调用指定函数
          },
          isAllCheck:{ //计算属性返回值
            get(){
             return this.completeSize ===this.todos.length && this.completeSize>0 //只有在选中个数大于0的时候勾选（全选按钮）
            },
            set(value){ //complete的值
              this.selectAll(value) //value代表当前是否勾选
            }
          }
        }
    }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
