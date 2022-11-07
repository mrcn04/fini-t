import Header from '../../components/Header';
import ReactECharts from 'echarts-for-react';
import constants from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../contexts/appContext';

export const ChurnPathsPage = () => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();

  const onNodeClick = (e: any) => {
    // We can redirect to cohorts page with the selected id
    // id: e.data.id
    // Also, in order to get rid of this if statement
    // backend may return a field so we can check if the value has it or not
    if (
      e.name === 'purchase_item_x' ||
      e.name === 'convert_currency' ||
      e.name === 'add_card'
    ) {
      navigate('/cohorts', { state: { id: e.data.id } });
    }
  };

  return (
    <div className="w-full">
      <Header title="Churn Paths" />
      <div className="bg-gray-100 h-full p-8 text-center position-relative">
        <ReactECharts
          style={{ width: '100%', textAlign: 'center', height: 400 }}
          option={state.chartOptions}
          onEvents={{ click: (e: any) => onNodeClick(e) }}
        />
      </div>
    </div>
  );
};
