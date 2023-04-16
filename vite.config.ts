import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
import Components from 'unplugin-vue-components/vite'
import NutUIResolver from '@nutui/nutui/dist/resolver'
import {VantResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5200,
        open: false,
        fs: {
            strict: true,
        },
        proxy: {
            '/api': 'http://localhost:7000'
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        Components({
            resolvers: [NutUIResolver(), VantResolver()],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
            }
        }
    }
})
