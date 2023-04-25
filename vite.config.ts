import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import svgr from 'vite-plugin-svgr'

import { UserConfig } from 'vite'

const config: UserConfig = {
  resolve: {
    alias: {
      '#root': __dirname
    }
  },
  plugins: [react(), ssr(), svgr()],
  publicDir: 'public',
}

export default config
