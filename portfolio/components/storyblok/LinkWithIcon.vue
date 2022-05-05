<template>
  <div v-editable="blok">
    <div class="flex my-2">
      <div class="flex justify-center items-center">
        <img
          v-if="blok.icon.filename"
          :src="blok.icon.filename"
          :alt="blok.icon.alt"
          class="w-4 mx-2 self-center"
        />
        <StoryblokComponent
          v-for="child in blok.fontAwesome"
          :key="child._uid"
          :blok="child"
          class="mx-2"
        />
      </div>
      <div>
        <a :href="blok.url.url">{{ blok.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      required: true,
      validator: (value) => {
        return (
          value === null ||
          (Object.hasOwn(value, 'name') &&
            Object.hasOwn(value, 'text') &&
            Object.hasOwn(value, 'url') &&
            ((Object.hasOwn(value, 'icon') &&
              Object.hasOwn(value.icon, 'filename')) ||
              Object.hasOwn(value, 'fontAwesome')))
        )
      },
    },
  },
}
</script>

<style scoped>
@tailwind base;

@layer base {
  a {
    @apply text-gray-700 no-underline;
  }

  a:hover {
    @apply underline;
  }
}
</style>
