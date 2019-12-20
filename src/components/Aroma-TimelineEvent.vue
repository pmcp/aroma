<template>
  <div class="cd-timeline__block" >
    <div class="cd-timeline__img cd-timeline__img--picture" :class="{ 'cd-timeline__img--milestone': milestone }">
         
    </div>

    <div class="cd-timeline__content text-component">
      <div class="flex justify-between items-center">
        <span class="cd-timeline__date" :class="{ 'cd-timeline__date--milestone': milestone }">
          <slot name="time"></slot>
        </span>
        <!-- <a href="#0" class="btn btn--subtle">Read more</a> -->
      </div>
      <h2>
        <slot name="title"></slot>
      </h2>
      <p class="color-contrast-medium">
        <slot name="text"></slot>
      </p>

      
    </div> <!-- cd-timeline__content -->
  </div> <!-- cd-timeline__block -->
</template>


<script>
export default {
  props: {
    milestone: {
      
      type: Boolean,
      default: false
    }
  },
};
</script>
