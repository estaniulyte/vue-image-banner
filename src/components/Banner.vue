<template>
  <div class="search">
    <div class="search__image" id="container" ref="container" @mousemove="revealImage" @mouseleave="resetImage">
      <img alt="cover" src="@/assets/banner.jpg">
      <div class="spotlight spotlight__inactive" id="overlay" ref="overlay"></div>
      <div class="search__image--content">
        <h1>Search books by&#160<VueWriter :array="arr" /></h1>
        <input type="search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data: () => ({
    leftPosition: 0,
    topPosition: 0,
    container: null,
    overlay: null,
    arr: ["keyword", "title", "author", "ISBN"]

  }),
  mounted () {
    this.container = document.getElementById('container')
    this.overlay = document.getElementById('overlay')
  },
  methods:  {
    revealImage (e) {
      this.leftPosition = e.pageX - this.container.offsetLeft;
      this.topPosition = e.pageY - this.container.offsetTop;

      this.$refs.overlay.style.backgroundImage = 'radial-gradient(circle at ' + (this.leftPosition*100/this.overlay.clientWidth) + "% " + (this.topPosition*100/this.overlay.clientHeight)+"%, transparent 160px, rgba(0, 0, 0, 0.78) 200px)"
    },
    resetImage () {
      this.$refs.overlay.style.backgroundImage = 'radial-gradient(circle at 60% 50%, transparent 10px, rgba(0, 0, 0, 0.78) 220px)'
    }
  }
}
</script>

<style lang="scss">
.search__image {
  align-items: center;
  background-size: cover;
  border-radius: 16px;
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  margin-top: 20px;
  color: white;

  h1 {
    display: flex;
    // text-transform: uppercase;
    font-weight: 600;
    padding: 15px 5px;

    .typed {
      font-weight: 700;
      color: rgb(18, 255, 200);
    }
  }

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    position: absolute;
    border-radius: 16px;
  }

  &--content {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 98;
  }
}

.spotlight {
  background-image: radial-gradient(circle at 60% 50%, transparent 10px, rgba(0, 0, 0, 0.78) 220px);
  border-radius: 16px;
  height: 100%;
  position: absolute;
  width: 100%;
  transition: all .2s ease;

  &__inactive {
    animation: spotlightInactiveAnm 8s ease-in-out infinite
  }
}

input[type="search"] {
  width: 50%;
  border: 0px;
  background: white;
  padding: 15px 30px;
  border-radius: 10px;
  outline: none;
  color: #000000;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>