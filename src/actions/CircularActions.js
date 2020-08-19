import Axios from "axios"
import { GET_CIRCULARS } from "./types";

export const getCirculars = pageNo => async dispatch => {
  const res = await Axios.get('/api/circular/circulars?page=' + pageNo + '&size=10');
  dispatch({
    type: GET_CIRCULARS,
    payload: res.data.content
  });
}