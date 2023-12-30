import storageService from '../../service/storageService';

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: JSON.parse(storageService.get(storageService.USER_INFO)),
  },
  mutations: {
    SET_TOKEN(state, token) {
      storageService.set(storageService.USER_TOKEN, token);
      state.token = token;
    },
    SET_USERINFO(state, userInfo) {
      storageService.set(storageService.USER_TOKEN, JSON.stringify(userInfo));
      state.userInfo = userInfo;
    },
  },
};

export default userModule;
