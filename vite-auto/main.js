import getPbImageURL from '@/api/getPbImageURL';
import { getStorage, insertLast, getNode } from 'kind-tiger';
import '/src/styles/global.css';
import pb from '@/api/pocketbase'



async function logout(){

  if(localStorage.getItem('auth')){

    const {isAuth,user} = await getStorage('auth');

    if(isAuth){
    
        const template = `
          <div class="thumbnail">
            <img src="${getPbImageURL(user,'avatar')}" alt="" />
          </div>
          <div class="username">${user.name}님 반갑습니다!</div>
          <button type="button" class="logout">로그아웃</button>
        `

        insertLast('.container',template);


        const logout = getNode('.logout');


        function handleLogout(){
          pb.authStore.clear()  
        }
        
        logout.addEventListener('click',handleLogout)

        

    }
  }
}


logout();