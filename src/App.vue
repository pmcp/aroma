<template>
   <transition
      name="fade"
      appear
    >
    <router-view />
  </transition>
</template>

<style>
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}
</style>