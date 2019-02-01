<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length==0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
     <Item v-for="(comment,index) in comments" :key="index" :comment="comment"
           :deleteComment="deleteComment" :index="index"/> <!--将遍历的对象交给Item-->
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue' //这里用单引号
export default {
  name: 'List',
  props: ['comments','deleteComment'],  //  申明接收属性,props这个属性就会成为组件对象的属性，注意引号（单双都行）
  components: {
    Item
  }
}
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>
