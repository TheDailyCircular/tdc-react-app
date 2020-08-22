import Axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setJWTTokenToHeader from '../security/setJWTTokenToHeader';
import jwt_decode from 'jwt-decode';

export const login = loginRequest => async dispatch => {
  try {
    const res = await Axios.post('/api/auth/login', loginRequest);

    const token = res.data.jwt;

    localStorage.setItem("jwtToken", token);

    setJWTTokenToHeader(token);

    const decode = jwt_decode(token);

    dispatch({
      type: SET_CURRENT_USER,
      payload: decode
    });

  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
}

export const logout = () => async dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTTokenToHeader(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};