import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useContext } from 'react';
import { AppContext } from '../../contexts/appContext';
import constants from '../../utils/constants';

export default function Search() {
  const { state, dispatch } = useContext(AppContext);

  const onChange = (e: any, newValue: any) => {
    dispatch({
      type: 'SEARCH_TEXT',
      payload: newValue,
    });
  };

  return (
    <div className="flex items-center mr-2">
      <span className="mr-2 font-bold">Event</span>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        size="small"
        value={state.searchText}
        options={constants.HEADER_SEARCH_OPTIONS.map((option) => option.title)}
        onChange={(e, newValue) => onChange(e, newValue)}
        renderInput={(params) => <TextField {...params} margin="none" />}
        style={{ width: 160 }}
      />
    </div>
  );
}
