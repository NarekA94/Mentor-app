import {httpClient} from '../../httpClient';

export const updateGroup = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await httpClient.post(`/group/edit/${id}`, data);
      dispatch({
        type: '@@auth/SET_GROUP',
        payload: res?.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchGroup = () => {
    return async (dispatch) => {
      try {
        const res = await httpClient.get('group/get-user-group');
        dispatch({
          type: '@@auth/SET_GROUP',
          payload: res?.data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };