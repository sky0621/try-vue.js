<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ abc() }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import * from "@/components/None.vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    abc(): void {
      console.log("abc");
//      test();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
