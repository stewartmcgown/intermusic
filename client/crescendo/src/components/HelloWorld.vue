<template>
  <div class="hello">
    <h2>Crescendo</h2>
    <v-button :onClick="consoleClick">Create Project</v-button>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'v-button': Button
  },
  methods: {
    consoleClick() {
      console.log('Button clicked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
