import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { AppContext } from '../../contexts/appContext';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 58,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(-2px)',
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14"><path d="M0 0h24v24H0z" fill="none"/><path fill="${encodeURIComponent(
          '#21005D',
        )}" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#21005D',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#fff',
    width: 16,
    height: 16,
    position: 'relative',
    top: 8,
    left: 10,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      fontWeight: 600,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14"><path fill="${encodeURIComponent(
        '#21005D',
      )}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#6750A4',
    borderRadius: 20 / 2,
  },
}));

export default function SwitchComponent() {
  const { state, dispatch } = useContext(AppContext);

  const onChange = () => {
    if (state.headerToggle === 'Missing') {
      dispatch({ type: 'TOGGLE', payload: 'Happened' });
    } else {
      dispatch({ type: 'TOGGLE', payload: 'Missing' });
    }
  };

  return (
    <div className="mr-2 w-48 text-center">
      <span className="font-bold">{state.headerToggle}</span>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ mr: 1 }} onChange={onChange} />}
        label={false}
        labelPlacement="start"
      />
    </div>
  );
}
