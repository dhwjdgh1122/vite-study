

import { defineConfig } from "vite";
import { resolve } from "node:path";

const viteConfig = defineConfig( {

  build:{
    outDir:'docs'
  },
  server:{
    host:'localhost',
    port:3000,
    cors:true
  },
  css:{
    devSourcemap:true,
    modules:{ // 파일명 내 마음대로 바꿔서 쓸 수 있다 
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    }
  },
  resolve:{
   // alias:{'@': '어떤 경로를 찾아서'}
   alias:{'@': resolve(__dirname, 'src')}
  }
})

console.log(resolve(__dirname,'src'));
export default viteConfig;