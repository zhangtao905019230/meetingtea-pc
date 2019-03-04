
const mutation = {
  login(state,payload){
    state.token = payload.token;
    state.user_phone = payload.user_phone;
    state.is_login = true;
    localStorage.setItem('token',payload.token);
    localStorage.setItem('user_phone',payload.user_phone);
  },
  setUser(state,payload){
    state.is_login = true;
    state.token = localStorage.getItem('token');
    state.user_phone = localStorage.getItem('user_phone');
    console.log(payload)
    state.user_avatar = payload.user_avatar;
  },
  clearUser(state,payload){
    state.token = '';
    state.user_phone = '';
    state.is_login = false;
    localStorage.removeItem('token');
    localStorage.removeItem('user_phone');
  }
};

export default mutation
