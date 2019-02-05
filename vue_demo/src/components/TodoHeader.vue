<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
    @keyup.enter="addItem" v-model="title"/> <!--添加监听-->
  </div>
</template>

<script>
    export default {
        name: "TodoHeader",
        props:{
          addTodo:Function //申明接收
        },
        data(){
            return{
              title:''
            }
        },
        methods:{
            addItem(){
                  //1.检查输入的合法性
                  const  title = this.title.trim();
                  if(!title){
                    alert("检查输入的合法性")
                    return
                  }
                  //2.根据输入生成一个todo对象
              const todo = {
                title: title,
                complete: false
              }
                //3.添加到todos(调用拥有todos对象的组件中)
                this.addTodo(todo)

                  //4.清除输入的内容
                  this.title=''
            }
        }
    }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
