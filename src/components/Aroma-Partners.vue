<template>
  <section class="text-component text-center">  
    <h2>{{ content.title}}</h2>
    <div class="parent grid padding-y-md justify-center">
      <aroma-partner class="col-2" v-for="partner in content.partners" :key="partner.uuid" :content="partner"></aroma-partner>
    </div>
    <h3>{{ content.title_poweredby}}</h3>
    <div class="parent grid padding-y-md justify-center">
      <aroma-partner class="col-2" v-for="partner in content.poweredby" :key="partner.uuid" :content="partner"></aroma-partner>
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