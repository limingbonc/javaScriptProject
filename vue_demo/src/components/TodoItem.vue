<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" :style="{display:isShow}" @click="deleteItem">删除</button>
  </li>
</template>

<script>
    export default {
        name: "TodoItem",
      props:{
          todo:Object,
          index:Number,
        deleteTodo:Function
      },
      data(){
          return {
            bgColor:'white', //默认背景颜色
            isShow: 'none'  //按钮默认显示
          }
      },
      methods:{
          handleEnter(isEnter){
            if(isEnter){
              this.bgColor ='#aaaaaa'
              this.isShow = 'block'
            }else{
              this.bgColor = 'white'
              this.isShow = 'none'
            }
          },
          deleteItem(){
            const {index,deleteTodo,todo} = this  //获取方法以及参数
            if(window.confirm("是否删除{todo.title}吗？")){
              deleteTodo(index)
            }
          }
      }
    }
</script>

<style scoped>

  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
