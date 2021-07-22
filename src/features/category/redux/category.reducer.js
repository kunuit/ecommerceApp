import {initialState} from './category.initial-state';
import {TypeCategory} from './category.type';

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case TypeCategory.changeFields:
      return {
        ...state,
        ...payload.changeFields,
      };
    case TypeCategory.fetchAllSuccess:
      return {
        ...state,
        showLoading: false,
        actionLoading: null,
        categories: {
          ...state.categories,
          list: payload.data,
        },
      };
    default:
      return state;
  }
};

export default reducer;
