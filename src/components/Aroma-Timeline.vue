<template>
  <div class="container max-width-lg cd-timeline__container">
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
</template>

<script>
import aromaTimelineEvent from "../components/Aroma-Timeline__Event";
export default {
  components: {
    aromaTimelineEvent,
  },
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>

</style>