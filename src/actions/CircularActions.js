import Axios from "axios"
import { GET_CIRCULARS, GET_ERRORS } from "./types";

export const getCirculars = pageNo => async dispatch => {
  const res = await Axios.get('/api/circular/get/circulars?page=' + pageNo + '&size=10');
  dispatch({
    type: GET_CIRCULARS,
    payload: res.data.content
  });
}

export const createCircular = (circular, history) => async dispatch => {
  try {
    await Axios.post('/api/circular/create', circular);
    history.push('/posts');
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
}