<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PaletteCard from './components/PaletteCard.vue'
</script>

<template>
  <div id="title">Random Color Palette Generator</div>
  <!-- <div v-if="copiedColor !== null">Color {{ this.copiedColor }} copied to your clipboard</div> -->
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
      },
      copyColor(color) {
          // var url = this.$refs.colorHex;
          // url.innerHTML = window.location.href;
          // console.log(url);
          this.copiedColor = color;
          console.log(this.copiedColor);
          navigator.clipboard.writeText(this.copiedColor)
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
              // this.palette.push({id: i, hex: hex})
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

<style>
@import "./scss/_pc.scss";
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
