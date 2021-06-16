<template>
  <div class="about">
    <h1>This is an about page</h1>

    <router-link to="/about/a">about a</router-link>
    <router-link to="/about/b">{{s}}</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'dsf',
  data() {
    return {
      s: 'about b'
    }
  },
  beforeCreate() {
    console.log(this)
  },
  created() {
  },
  mounted() {
    
  }
}
</script>

