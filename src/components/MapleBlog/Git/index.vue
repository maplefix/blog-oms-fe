<template>
  <div>
    <svg-icon icon-class="github" @click="goto"/>
  </div>
</template>

<script>
  export default {
    name: 'MapleBlogGit',
    data() {
      return {
        url: 'https://github.com/maplefix/maple-blog'
      }
    },
    methods: {
      goto() {
        window.open(this.url)
      }
    }
  }
</script>
