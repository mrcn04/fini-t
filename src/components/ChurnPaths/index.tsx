import Dropdown from './Dropdown';
import Search from './Search';

import SearchIcon from '@mui/icons-material/Search';
import SwitchComponent from './Switch';

export default function ChurnPathsHeaderOptions() {
  const search = () => {
    // fetch new data with the given props on context state
  };

  return (
    <div className="flex items-center">
      <Search />
      <SwitchComponent />
      <Dropdown />
      <div className="cursor-pointer ml-4" onClick={search}>
        <SearchIcon />
      </div>
    </div>
  );
}
