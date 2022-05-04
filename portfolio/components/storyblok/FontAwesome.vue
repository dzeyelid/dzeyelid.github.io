<template>
  <font-awesome-icon :icon="[blok.prefix, blok.name]" />
</template>

<script>
export default {
  props: {
    blok: {
      required: true,
      validator: (value) => {
        return (
          value === null ||
          (Object.hasOwn(value, 'prefix') && Object.hasOwn(value, 'name'))
        )
      },
    },
  },
}
</script>
