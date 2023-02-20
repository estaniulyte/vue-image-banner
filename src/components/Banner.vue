<template>
  <div id="container" ref="container" @mousemove="revealImage">
    <div id="overlay" ref="overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data: () => ({
    leftPosition: 0,
    topPosition: 0,
    overlayHalfWidth: 0,
    cont: null,
    over: null

  }),
  mounted() {
    this.cont = document.getElementById('container')
    this.over = document.getElementById('overlay')

    this.overlayHalfWidth = this.over.clientWidth / 2;
  },
  methods:  {
    revealImage (e) {
      this.leftPosition = e.pageX - this.cont.offsetLeft;
      this.topPosition = e.pageY - this.cont.offsetTop;

      this.$refs.overlay.style.left = this.leftPosition - this.overlayHalfWidth + 'px';
      this.$refs.overlay.style.top = this.topPosition - this.overlayHalfWidth + 'px';
    }
  }
}
</script>

<style lang="scss">
#container {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/picture.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover #overlay {
    background: transparent;
  }
}

#overlay {
  position: absolute;
  z-index: 1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 0 100vw #c88d81b1;
  background: #c88d81b1;
  transition: background 0.2s;
}

body {
  margin: 0;
  /* background-color: #f7edeb; */
}
</style>