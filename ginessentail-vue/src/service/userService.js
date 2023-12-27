import request from '../utils/request';

const register = ({ name, telephone, password }) => request.post('auth/register', { name, telephone, password });

export default {
  register,
};
