import Header from '../../components/Header';
import StatisticsTable, { IStatistics } from './components/StatisticTable';
import ReactECharts from 'echarts-for-react';
import constants from '../../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { pieceDataFetcher } from '../../utils/promise';

interface IProps {
  current?: IStatistics;
  rest?: IStatistics;
}

const defaultProps: IProps = {
  current: {
    avSpending: 12,
    dat: '12 mins',
    lpm: 3,
    cScore: 93,
    type: 'current',
  },
  rest: {
    avSpending: 54,
    dat: '2hrs 34min',
    lpm: 12,
    cScore: 7,
    type: 'rest',
  },
};

// instead of using default hard-coded props, we can get the id
// from props and fetch the selected item
export const CohortsPage = ({
  current,
  rest,
}: IProps & typeof defaultProps) => {
  const [fetched, setFetched] = useState<boolean>(false);
  const shouldFetch = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (shouldFetch.current) {
      fetch();
    }

    return () => {
      shouldFetch.current = true;
    };
  }, []);

  const fetch = async () => {
    // fetch the data with location.state.id
    const data = await pieceDataFetcher('location.state.id');
    setFetched(Object.keys(data).length ? true : false);
    shouldFetch.current = false;
  };

  const onClick = () => {
    navigate('/actions', { state: { id: location.state?.id } });
  };

  return (
    <div className="w-full">
      <Header title="Cohorts" />
      {fetched ? (
        <div className="bg-gray-100 h-full py-4 px-32 flex flex-col">
          <div className="my-4 font-bold">
            <h6>User cohort statistics for path</h6>
            <ReactECharts
              style={{ width: '100%', textAlign: 'center', height: 150 }}
              option={constants.TREE_CHART_OPTIONS_PIECE}
            />
          </div>
          <div className="my-4">
            <h6 className="font-bold">Cohort Statistics</h6>
            <StatisticsTable
              avSpending={current?.avSpending}
              dat={current?.dat}
              lpm={current?.lpm}
              cScore={current?.cScore}
              type={current?.type}
            />
          </div>
          <div className="my-4">
            <h6 className="font-bold">Versus rest</h6>
            <StatisticsTable
              avSpending={rest?.avSpending}
              dat={rest?.dat}
              lpm={rest?.lpm}
              cScore={rest?.cScore}
              type={rest?.type}
            />
          </div>
          <button
            type="button"
            className="py-1 px-4 bg-rose-700 text-white text-sm text-center border-none mx-auto"
            onClick={onClick}>
            Turn into preventative action
          </button>
        </div>
      ) : null}
    </div>
  );
};

CohortsPage.defaultProps = defaultProps;
