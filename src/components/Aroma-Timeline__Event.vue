<template>
  <div class="cd-timeline__block">
    <div class="cd-timeline__img cd-timeline__img--picture">
      <!-- <img src="assets/img/1.jpg" alt="Picture"> -->
    </div> <!-- cd-timeline__img -->

    <div class="cd-timeline__content text-component">
      <h2>
        <slot name="title"></slot>
      </h2>
      <p class="color-contrast-medium">
        <slot name="time"></slot>
      </p>

      <div class="flex justify-between items-center">
        <span class="cd-timeline__date">
          <slot name="time"></slot>
        </span>
        <!-- <a href="#0" class="btn btn--subtle">Read more</a> -->
      </div>
    </div> <!-- cd-timeline__content -->
  </div> <!-- cd-timeline__block -->
</template>