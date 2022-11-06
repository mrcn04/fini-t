interface IAction {
  type: string;
  payload: any;
}

export const initialState = {
  searchText: 'user_login',
  headerToggle: 'Missing',
  pastDay: 14,
};

export const reducer = (state: typeof initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE':
      return { ...state, headerToggle: payload };
    case 'SEARCH_TEXT':
      return { ...state, searchText: payload };
    case 'PAST':
      return { ...state, pastDay: payload };

    default:
      return state;
  }
};
