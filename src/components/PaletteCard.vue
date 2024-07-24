<script setup>
import { copyHTMLToClipboard } from '../main';
</script>

<template>
    <div class="card" @click="copyColor(this.colorHex)">
        <div class="color" :style="{backgroundColor: `${this.colorHex}`}" :key="this.colorHex">
        </div>
        <div class="color-code" ref="hex">{{ this.colorHex }}</div>
    </div>
</template>

<style>
@import '../scss/_pc.scss';
</style>

<script>
export default {
    props: [
        'colorHex'
    ],
    methods: {
        copyColor(color) {
            // I tried this method two different ways:
            // 1. using a passed in 'color' through the event.
            // 2. using a template ref (what I have uncommented now)
            // I also decided not to use copyHTMLToClipboard from fns because
            // it copies the html as a blob you can't paste in the browser

            // console.log(this.$refs.hex.innerHTML);
            // copyHTMLToClipboard(this.$refs.hex.innerHTML);
            // this.copiedColor = color;
            // console.log(this.copiedColor);
            navigator.clipboard.writeText(this.$refs.hex.innerHTML);
        },
    },
}
</script>