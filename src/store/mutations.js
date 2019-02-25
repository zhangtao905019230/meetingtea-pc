
const mutation = {
  login(state,payload){
    state.token = payload.token;
    state.userInfo = JSON.stringify(payload.userInfo);
    localStorage.setItem('token',payload.token);
    localStorage.setItem('userInfo',JSON.stringify(payload.userInfo));
  },
  setUser(state,payload){
    state.token = localStorage.getItem('token');
    state.userInfo = localStorage.getItem('userInfo');
  },
  clearUser(state,payload){
    state.token = '';
    state.userInfo = '{}';
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
  }
}

export default mutation
