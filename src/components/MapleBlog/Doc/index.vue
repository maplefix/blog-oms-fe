<template>
  <div>
    <svg-icon icon-class="skill" @click="goto"/>
  </div>
</template>

<script>
  export default {
    name: 'MapleBlogDoc',
    data() {
      return {
        url: 'https://www.maplefix.top'
      }
    },
    methods: {
      goto() {
        window.open(this.url)
      }
    }
  }
</script>
