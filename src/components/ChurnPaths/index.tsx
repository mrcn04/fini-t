import Dropdown from './Dropdown';
import Search from './Search';

import SearchIcon from '@mui/icons-material/Search';

export default function ChurnPathsHeaderOptions() {
  const search = () => {};

  return (
    <div className="flex items-center">
      <Search />
      <div className="mr-2 font-bold">Missing: ...</div>
      <Dropdown />
      <div className="cursor-pointer ml-4" onClick={search}>
        <SearchIcon />
      </div>
    </div>
  );
}
