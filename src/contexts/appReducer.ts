interface IAction {
  type: string;
  payload: any;
}

export const initialState = {
  searchText: 'user_login',
  headerToggle: 'missing',
  pastDay: 14,
};

export const reducer = (state: typeof initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE':
      let value = payload === 'missing' ? 'missing' : 'happened';
      return { ...state, headerToggle: value };
    case 'SEARCH_TEXT':
      return { ...state, searchText: payload };
    case 'PAST':
      return { ...state, pastDay: payload };

    default:
      return state;
  }
};
