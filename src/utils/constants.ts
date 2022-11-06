import { data, pieceData } from '../data';

export default {
  SIDEBAR_ITEMS: [
    {
      label: 'Event Sources',
      path: '/event-sources',
    },
    {
      label: 'Churn Paths',
      path: '/churn-paths',
    },
    {
      label: 'Cohorts',
      path: '/cohorts',
    },
    {
      label: 'Actions',
      path: '/actions',
    },
  ],
  TREE_CHART_OPTIONS: {
    series: [
      {
        type: 'tree',
        data: [data],
        top: '25%',
        left: '30%',
        bottom: '1%',
        right: '7%',
        symbolSize: 7,
        orient: 'RL',
        symbol: 'none',
        lineStyle: {
          width: 2,
        },
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
        },
        emphasis: {
          focus: 'descendant',
        },
        width: 500,
        expandAndCollapse: false,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  },
  TREE_CHART_OPTIONS_PIECE: {
    series: [
      {
        type: 'tree',
        data: [pieceData],
        top: '1%',
        left: '25%',
        bottom: '1%',
        right: '7%',
        orient: 'RL',
        symbol: 'none',
        lineStyle: {
          width: 4,
        },
        width: 500,
        expandAndCollapse: false,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  },
};
