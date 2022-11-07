import { data, data2 } from '../data';
import constanst from '../utils/constants';

interface IAction {
  type: string;
  payload: any;
}

export const initialState = {
  searchText: 'user_login',
  headerToggle: 'Missing',
  pastDay: 14,
  chartOptions: constanst.TREE_CHART_OPTIONS,
};

export const reducer = (state: typeof initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE':
      return { ...state, headerToggle: payload };
    case 'SEARCH_TEXT':
      return { ...state, searchText: payload };
    case 'PAST':
      return {
        ...state,
        pastDay: payload,
        chartOptions: {
          ...state.chartOptions,
          series: [
            {
              ...state.chartOptions.series[0],
              data: [payload === 14 ? data : data2],
            },
          ],
        },
      };

    default:
      return state;
  }
};
