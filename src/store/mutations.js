
const mutation = {
  login(state,payload){
    state.token = payload.token;
    state.user_phone = payload.user_phone;
    state.isLogin = true;
    state.basic_info = payload.basic_info;
    localStorage.setItem('token',payload.token);
    localStorage.setItem('user_phone',payload.user_phone);
  },
  setUser(state,payload){
    // console.log(payload,123)
    state.isLogin = true;
    state.token = localStorage.getItem('token');
    state.user_phone = localStorage.getItem('user_phone');
    state.basic_info = payload;
  },
  clearUser(state,payload){
    state.token = '';
    state.user_phone = '';
    state.isLogin = false;
    state.basic_info = {};
    localStorage.removeItem('token');
    localStorage.removeItem('user_phone');
  }
};

export default mutation
