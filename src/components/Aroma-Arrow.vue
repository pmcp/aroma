<template>
  <div class="aroma-scrollDown" :class="arrowClass">
    <svg version="1.1" id="svg-arrow-down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 35" style="enable-background:new 0 0 22 35;" xml:space="preserve">
    <polygon class="arrow" style="fill:#000000;" points="20.58,11.584 12.004,20.158 12.004,0 9.996,0 9.996,20.158 1.42,11.584 0,13.004 11,24
					22,13.004 "></polygon>
  </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrowClass: ''
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {

      if(window.scrollY <= 100 && this.arrowClass === '') return;
      if(window.scrollY <= 100 && this.arrowClass === 'aroma-arrow--hide') this.arrowClass = '';
      if(window.scrollY >= 101 ) this.arrowClass = 'aroma-arrow--hide'

      // Any code to be executed when the window is scrolled
    }
  }
}
</script>

<style scoped>
.aroma-scrollDown {
  width: 100%;
  margin-top: 2rem;
  height: 2rem;
  text-align: center;

  animation: scroll .35s ease-in alternate infinite;
}

.aroma-scrollDown svg {
  width: 1rem;
}

.aroma-scrollDown--hide {
  display: none;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}


</style>
