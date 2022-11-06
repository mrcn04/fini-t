import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Search from '../ChurnPaths/Search';
import { useState } from 'react';

export default function Dropdown() {
  const [age, setAge] = useState('14');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="flex items-center">
      <span className="font-bold">Past</span>
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          onChange={handleChange}>
          <MenuItem value={14}>14d</MenuItem>
          <MenuItem value={28}>28d</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
