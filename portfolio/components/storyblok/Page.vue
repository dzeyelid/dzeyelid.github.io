<template>
  <div v-editable="blok" class="px-6" data-test="page">
    <StoryblokComponent
      v-for="child in blok.body"
      :key="child._uid"
      :blok="child"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      required: true,
      validator: (value) => {
        return (
          value === null || (value.body != null && Array.isArray(value.body))
        )
      },
    },
  },
}
</script>
