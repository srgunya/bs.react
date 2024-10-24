import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "/src/global.scss";`,
				api: 'modern-compiler',
			},
		},
	},
	plugins: [react()],
})
