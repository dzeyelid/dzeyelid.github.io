<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="bio" v-html="bio"></div>
</template>

<script>
export default {
  props: {
    bio: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
.header {
  @apply font-bold text-gray-600;
}

.bio /deep/ h1 {
  @apply header text-3xl my-4;
}

.bio /deep/ h2 {
  @apply header text-2xl my-4;
}

.bio /deep/ h3 {
  @apply header text-xl my-4;
}

.bio /deep/ h4,
h5 {
  @apply header text-lg;
}

.bio /deep/ ul li {
  @apply border-solid border-l-4 border-gray-200 list-inside;
  text-indent: 1rem;
}

.bio /deep/ ol li {
  @apply list-decimal list-inside;
}
</style>
