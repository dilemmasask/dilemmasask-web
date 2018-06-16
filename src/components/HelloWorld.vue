<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      apiUrl: process.env.API_URL || 'http://localhost:8081',
      msg: ':('
    };
  },
  created () {
    axios.get(`${this.apiUrl}/helloworld`)
      .then(res => { this.msg = res.data; });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
