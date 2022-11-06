import logo from '../../assets/react.svg';
import shape from '../../assets/images/shape.png';
import { useLocation } from 'react-router-dom';
import ChurnPathsHeaderOptions from '../ChurnPaths';

interface IProps {
  title: string;
}

export default function Header({ title }: IProps) {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center py-6 px-8 bg-white">
      <h2 className="font-bold text-2xl">{title}</h2>
      {location.pathname === '/churn-paths' ? (
        <ChurnPathsHeaderOptions />
      ) : null}
      <div className="flex items-center">
        <img src={logo} style={{ height: 40 }} />
        <div className="mx-2 leading-4">
          <p className="font-bold m-0 p-0">User</p>
          <span className="text-xs m-0 p-0">Admin</span>
        </div>
        <img src={shape} className="ml-4 self-start mt-2" />
      </div>
    </div>
  );
}
