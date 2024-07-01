

import '@/styles/global.css';

import { getNode as $ } from "kind-tiger";
//
import {btn} from "@/styles/main.module.css";

import img from "@/assets/8b.jpg";

const app = $('#app');

console.log(app);

const h1 = document.createElement('h1');
h1.textContent = '빛 보다 빠른 Vite ⚡️임';
h1.classList.add = 'heading';

const figure = document.createElement('figure');
// img 코드 preview에서는 안보임 동적자산
figure.innerHTML = `
  <img src="${img}" style="width:50px"/>
  <button class="${btn}" type="button">버튼</button>
  <figcaption>로고</figcaption>
`
// 의미없는 그룹핑 div 같은걸 사용하기 싫을때 fragment 사용한다
// 성능적으로도 접근성으로도 가독성으로도 좋음 

const fragment = document.createDocumentFragment();

fragment.appendChild(h1);
fragment.appendChild(figure);


app.appendChild(fragment);
