import { Dispatch, SetStateAction } from 'react';

import { Alert, AlertColor, Snackbar } from '@mui/material';

type Props = {
  message: string;
  severity: AlertColor;
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

const CustomSnackbar = ({ message, severity, open, onClose }: Props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={5000}
      onClose={() => onClose(false)}
    >
      <Alert onClose={() => onClose(false)} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;