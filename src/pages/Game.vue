<template>
  <div class="">
      <section class="hexagon-gallery">
      <div class="hex"><img src="sprites/map_clearTile.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_castleTileRed.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_castleTileBlue.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_houseTileBlue.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_houseTileRed.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_houseTileBlue.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_castleTileRed.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_houseTileBlue.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_castleTileRed.png" alt="some"></div>
      <div class="hex"><img src="sprites/map_castleTileRed.png" alt="some"></div>
    </section>
  </div>
</template>

<script>
import {useQuasar} from 'quasar'
export default {
  data() {
    return {
    };
  },
  
  setup () {
    const $q = useQuasar()
    return {
      triggerNegative () {
        $q.notify({
          type: 'negative',
          message: 'Error connecting with server.'
        })
      },
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
    openQ(event){
      alert(event.target.id)
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.hexagon-gallery {
  margin: auto;
  margin-top: 50px;
  width: 200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 32px;
  grid-gap: 14px;
  padding-bottom: 50px;
}

.hex {
  display: flex;
  position: relative;
  width: 48px;
  height: 55px;
  background-color: #424242;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hex:first-child {
  grid-row-start: 1;
  grid-column: 2 / span 2;
}

.hex:nth-child(2) {
  grid-row-start: 1;
  grid-column: 4 / span 2;
}

.hex:nth-child(3) {
  grid-row-start: 1;
  grid-column: 6 / span 2;
}

.hex:nth-child(4) {
  grid-row-start: 2;
  grid-column: 1 / span 2;
}

.hex:nth-child(5) {
  grid-row-start: 2;
  grid-column: 3 / span 2;
}

.hex:nth-child(6) {
  grid-row-start: 2;
  grid-column: 5 / span 2;
}

.hex:nth-child(7) {
  grid-row-start: 2;
  grid-column: 7 / span 2;
}

.hex:nth-child(8) {
  grid-row-start: 3;
  grid-column: 2 / span 2;
}

.hex:nth-child(9) {
  grid-row-start: 3;
  grid-column: 4 / span 2;
}

.hex:nth-child(10) {
  grid-row-start: 3;
  grid-column: 6 / span 2;
}
</style>