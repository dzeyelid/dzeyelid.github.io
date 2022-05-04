<template>
  <div v-editable="blok" class="">
    <div class="flex">
      <div class="m-6">
        <img
          :src="blok.icon.filename"
          alt="blok.icon.alt"
          class="rounded-full ring-2 ring-white"
        />
      </div>
      <div>
        <div class="m-6">
          <div class="name text-5xl font-bold tracking-wider">
            {{ blok.name_en }}
          </div>
          <div class="name text-2xl font-medium tracking-wide">
            {{ blok.name }}
          </div>
        </div>

        <div class="m-6">
          <StoryblokComponent
            v-for="child in blok.links"
            :key="child._uid"
            :blok="child"
          />
        </div>
      </div>
    </div>
    <div class="m-16">
      <bio :bio="bio"></bio>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import Bio from '../Bio.vue'

export default {
  components: {
    Bio,
  },

  props: {
    blok: {
      required: true,
      validator: (value) => {
        return (
          value === null ||
          (Object.hasOwn(value, 'links') &&
            Array.isArray(value.links) &&
            Object.hasOwn(value, 'name') &&
            Object.hasOwn(value, 'name_en') &&
            Object.hasOwn(value, 'icon') &&
            Object.hasOwn(value, 'bio'))
        )
      },
    },
  },

  setup: (props) => {
    const bio = marked.parse(props.blok.bio)
    return {
      bio,
    }
  },
}
</script>

<style scoped>
.name {
  @apply text-primary-700;
}
</style>
