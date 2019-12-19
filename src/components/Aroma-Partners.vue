<template>
  <section class="text-component text-center padding-y-xl">
    <h2 class="text-lg">{{ content.title}}</h2>
    <div class="parent grid padding-y-md justify-center">
      <aroma-partner
        class="col-2"
        v-for="(partner, key) in content.partners"
        :key="'normalpartner-' + key"
        :content="partner"
      ></aroma-partner>
    </div>
    <h3 class="text-md">{{ content.title_poweredby}}</h3>
    <div class="parent grid padding-y-md justify-center">
      <aroma-partner
        class="col-2"
        v-for="(partner, key) in content.poweredby"
        :key="'poweredbypartner-' + key"
        :content="partner"
      ></aroma-partner>
    </div>

  </section>
</template>

<script>

export default {
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