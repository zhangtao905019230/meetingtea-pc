
const mutation = {
  login(state,payload){
    state.token = payload.token;
    state.phoneNumber = payload.phoneNumber;
    state.isLogin = true;
    localStorage.setItem('token',payload.token);
    localStorage.setItem('phoneNumber',payload.phoneNumber);
  },
  setUser(state,payload){
    state.isLogin = true;
    state.token = localStorage.getItem('token');
    state.phoneNumber = localStorage.getItem('phoneNumber');
  },
  clearUser(state,payload){
    state.token = '';
    state.phoneNumber = '';
    state.isLogin = false;
    localStorage.removeItem('token');
    localStorage.removeItem('phoneNumber');
  }
};

export default mutation
