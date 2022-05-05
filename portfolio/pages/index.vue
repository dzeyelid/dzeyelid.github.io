<template>
  <div class="flex justify-around mt-20">
    <StoryblokComponent v-if="story && story.content" :blok="story.content" />
  </div>
</template>

<script>
import { useStoryblok } from '@storyblok/nuxt'
export default {
  name: 'IndexPage',
  setup(props) {
    const version =
      process.env.NUXT_ENV_STORYBLOK_VERSION === 'published'
        ? 'published'
        : 'draft'
    const { story, fetchState } = useStoryblok('home', { version })
    return {
      story,
      fetchState,
    }
  },
}
</script>
