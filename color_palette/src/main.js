import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

export async function copyHTMLToClipboard(html) {
    try {
        await navigator.clipboard.write([
            new ClipboardItem({
                'text/html' : new Blob([html], {type: 'text/html'}),
            }),
        ]);
    } catch (err) {
        console.error('Failed to copy HTML: ', err);
    }
}
