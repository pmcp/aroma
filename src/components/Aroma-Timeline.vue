<template>
  <div class="container max-width-md  margin-top-xxl margin-bottom-xxl">
    <div v-if="title" class="text-component padding-y-md" >
          <h2 class="text-xl color-primary text-center">{{ title }}</h2>
    </div>
     <div v-else-if="content.title" class="text-component padding-bottom-md" >
          <h2 class="text-xl color-primary">{{ title }}</h2>
    </div>

    <div class="cd-timeline__container">
    <aroma-timeline-event v-for="event in content.events" :key="event._uid" :milestone="event.milestone">
        <template v-slot:time>
          {{ event.time }}
        </template>
        <template v-slot:title>
          {{ event.title }}
        </template>
        <template v-slot:text>
          {{ event.text }}
        </template>
    </aroma-timeline-event>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: null
    },
  }
};
</script>

<style lang="scss" scoped>

</style>