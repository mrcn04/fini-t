import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Search from '../ChurnPaths/Search';
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/appContext';

export default function Dropdown() {
  const { state, dispatch } = useContext(AppContext);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch({
      type: 'PAST',
      payload: event.target.value,
    });
  };

  return (
    <div className="flex items-center">
      <span className="font-bold">Past</span>
      <FormControl sx={{ m: 1, minWidth: 80, margin: '0 8px' }} size="small">
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={state.pastDay}
          onChange={handleChange}>
          <MenuItem value={14}>14d</MenuItem>
          <MenuItem value={28}>28d</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
