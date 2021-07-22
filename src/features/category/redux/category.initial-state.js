export const initialState = Object.freeze({
  // loading
  showLoading: false,
  actionLoading: null,
  // handle
  errorCategory: null,
  categories: Object.freeze({
    list: {},
    pagination: {
      current: 0,
      limit: 0,
      total: 0,
    },
  }),
});
