### vite 학습 저장소
---
- index.해시코드.js 파일 이름이 왜 이렇게 난해한가?

웹 브라우저는 성능을 끌어올리기 위해서 데이터를 가지고 있다 대표적인 데이터는 `main.js`, `main.css`, `img` 등    
처음 로딩이 되었을때 기억하고 있다. 바로 데이터를 가져오는게 아니라 기존에 있는거 사용하려고 함. 리소스 아끼려고 => 캐싱? 장점도 있고 단점도 있음 만약 `main.css`에서 버튼 색을 변경하고 새로고침해도 버튼 색 변경이 안된다. 파일 `main.css` 이름이 같으므로 그래서 사용자가 **강력 새로고침** 등을 해야하는데 
매번 웹 브라우저를 사용자한테 우리 업데이트 했으니까 **강력 새로고침**해라? 이럴순 없다. 그래서 쓰는게 매번 이름을 다르게 버전을 보낸다.
vite는 지가 알아서 해줌 그래서 난해한값은 새로고침할때마다 항상 달라지는거지

- `main.js`에서 이제 `html` 파일에 작성한 `h1`태그를 동적으로 작성하기

      const h1 = document.createElement('h1');
      h1.textContent = '빛 보다 빠른 Vite ⚡️임';
      h1.classList.add = 'heading';

      app.appendChild(h1);

- 의미없는 그룹핑 `div` 같은거 말고 `fragment`를 사용하자 성능적으로도 접근성으로도 가독성으로도 좋음

      const fragment = document.createDocumentFragment();

      fragment.appendChild(h1);
      fragment.appendChild(figure);


      app.appendChild(fragment);


### 이미지 동적자산, 정적자산

    <img src="./src/assets/8b.jpg" style="width:50px"/> -> 개발환경에서는 보임

- 정적자산: 사이트를 만들때 거의 바뀌지 않는 이미지
- 동적자산: 주기적으로 이미지가 변경되어야하면 포함시켜야 한다.

캐시 성능을 위해 정적 자산은 파일 경로가 고정되어 브라우저가 캐시된 버전을 사용하지만, 자주 변경되는 이미지 같은 동적 자산은 빌드 과정에서 파일 이름에 고유한 해시를 추가하여 변경될 때마다 해시 값이 변경되므로, 브라우저는 이를 새로운 파일로 인식하고 최신 파일을 가져온다?


### 절대 경로의 별칭
src도 쓰는게 귀찮다 -> 별칭을 지어주자
`resolve.alias`









