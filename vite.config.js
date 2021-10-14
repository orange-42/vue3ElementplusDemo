import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {				// ← ← ← ← ← ←
    host: '0.0.0.0'	// ← 新增内容 ←
  }						// ← ← ← ← ← ←
}