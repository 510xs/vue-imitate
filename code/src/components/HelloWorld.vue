<template>
  <div class="hello">

    <button @click="handlelogin">提交</button>
    <input />
    <ul>
    </ul>
  
  </div>
</template>


<script>
// <!--辅助函数 -->
import { mapActions,mapState, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    
  },
  methods:{
    ...mapActions({
      handlelogin:"userLogin" 
    }),
    ...mapMutations({
      updMessage:'USER_UPDNAME'
    })
  },
  computed:{
    ...mapState(['data'])
  }
}
</script>y

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
