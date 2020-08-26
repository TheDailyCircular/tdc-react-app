import Axios from 'axios';
import { SET_CURRENT_USER, GET_ERRORS, REGISTER_NEW_USER } from './types';
import setJWTTokenToHeader from '../security/setJWTTokenToHeader';
import jwt_decode from 'jwt-decode';

export const login = loginRequest => async dispatch => {
  try {
    // post the loginRequest(email and password)
    const res = await Axios.post('/api/auth/login', loginRequest);
    // extract the JWT token
    const token = res.data.jwtToken;
    // store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    // set the token in the header
    setJWTTokenToHeader(token);
    // decode the token
    const decode = jwt_decode(token.split(" ")[1]);
    // dispatch to SecurityReducer
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
};

export const logout = () => async dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTTokenToHeader(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

export const registration = newUser => async dispatch => {
  try {
    await Axios.post('/api/user/register', newUser);

  } catch (err) {
    dispatch({
      type: REGISTER_NEW_USER,
      payload: err.response.data
    });
  }
}