<script setup>
import PaletteCard from './components/PaletteCard.vue'
</script>

<template>
  <div id="title">Random Color Palette Generator</div>
  <div id="palette-area">
    <div v-for="color in palette">
      <PaletteCard :colorHex="color.hex"/>
    </div>
  </div>
  <div id="button-area">
    <button @click="generateRandomColors">Generate palette</button>
    <p>Or just press the "Spacebar" to generate new palettes.</p>
  </div>
  <div id="instructions">Click to copy individual color &#x2022; Press "C" to copy palette</div>
</template>

<script>
export default {
  name: 'Palette',
  components: {
    PaletteCard
  },
  data() {
      return {
          copiedColor: null,
          palette: [
              {
                  id: 0,
                  hex: 'FFFFF',
              },
              {
                  id: 1,
                  hex: 'FFFFF',
              },
              {
                  id: 2,
                  hex: 'FFFFF',
              },
              {
                  id: 3,
                  hex: 'FFFFF',
              },
              {
                  id: 4,
                  hex: 'FFFFF',
              },
          ]
      };
  }, 
  mounted () {
      this.generateRandomColors();
      document.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
      onKeyDown(event) {
          if (event.key === " ") {
            this.generateRandomColors();
          }
          if (event.key === "c") {
            this.copyPalette();
          }
      },
      copyPalette() {
        let p = []
        this.palette.forEach(c => p.push(c.hex));
        navigator.clipboard.writeText(p);
      },
      generateRandomColors() {
          const characters = 'ABCDEF0123456789';
          let hex = '#';
          let colors = [];
          for (let i = 0; i < 5; i++) {
              for (let j = 0; j < 6; j++) {
                  hex += characters.charAt(Math.floor(Math.random() * characters.length));
              }
              console.log(`Color ${i}: ${hex}`);
              this.palette[i].id = i;
              this.palette[i].hex = hex;
              colors[i] = hex;
              hex = '#';
          }
          console.log(this.palette);
          return colors;
      }
  },
}
</script>