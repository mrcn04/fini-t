import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Search() {
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
  ];

  return (
    <div className="flex items-center mr-2">
      <span className="mr-2 font-bold">Event</span>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        size="small"
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} />}
        style={{ width: 120 }}
      />
    </div>
  );
}
