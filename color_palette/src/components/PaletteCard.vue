<template>
    <div v-if="copiedColor !== null">Color {{ this.copiedColor }} copied to your clipboard</div>
    <div id="palette-area">
        <div id="palette">
            <div class="card" v-for="color in palette" :key="color.id" @click="copyColor(color.hex)">
                <div class="color" :style="{backgroundColor: `${color.hex}`}" :key="color.hex">
                </div>
                <div class="color-code">{{ color.hex }}</div>
            </div>
        </div>
        <button @click="generateRandomColors">Generate palette</button>
    </div>
</template>

<style>
    @import "../scss/_pc.scss";
</style>

<script>

export default {
    name: 'PaletteCard',
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
        document.addEventListener("keydown", () => {
            if (event.key === " "){
                this.generateRandomColors();
            }
        })
        this.generateRandomColors();
    },
    methods: {
        copyColor(color) {
            this.copiedColor = color;
            console.log("Hello");
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