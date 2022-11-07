import { useNavigate } from 'react-router-dom';
import constants from '../../utils/constants';

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = window?.location;

  const pathSelector = (path: string): string => {
    if (pathname === path) {
      return 'bg-blue-500 text-white rounded-xl';
    } else {
      return 'text-gray-400 ';
    }
  };

  const onClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="p-8 h-screen bg-white" style={{ minWidth: '260px' }}>
      <div className="flex pb-4 justify-center">
        <img src={'/images/fini.png'} className="mr-4" style={{ height: 40 }} />
      </div>
      <ul className="mt-5">
        {constants.SIDEBAR_ITEMS.map(
          (item: { label: string; path: string }, index: number) => (
            <li
              className={`mb-4 px-6 py-3 cursor-pointer text-center font-bold ${pathSelector(
                item.path,
              )} hover:bg-blue-500 hover:text-white hover:rounded-xl`}
              onClick={() => onClick(item.path)}
              key={index}>
              {item.label}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
