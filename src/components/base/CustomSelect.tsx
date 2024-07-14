import { Select, BaseSelectProps } from '@mui/material';
import { ReactNode } from 'react';

interface Props  extends BaseSelectProps  {
  children: ReactNode;
}

const CustomSelect = ({ children, ...props }: Props) => {
  return (
    <Select
      fullWidth
      {...props}
      size={'small'}
      sx={{
        '.css-10hburv-MuiTypography-root': {
          fontSize: '16px',
        },
        '& fieldset': {
          borderRadius: false ? '30px' : '10px',
          backgroundImage: 'url(/src/assets/images/backgrounds/field-bg.png)',
          backgroundPosition: 'right 5% bottom 1%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        },
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px #151c36 inset',
            WebkitTextFillColor: '#fff',
          },
          marginY: 0.5,
          marginX: 1.5,
          color: 'black',
          paddingY: 0.5,
          opacity: 0.9,
          '&::placeholder': {
            color: 'white',
            opacity: 0.5,
          },
        },
        '&  .MuiFormHelperText-root.Mui-error': {
          backgroundColor: '',
          margin: 0,
          paddingLeft: 1,
        },
      }}
    >
      {children}
    </Select>
  );
};

export default CustomSelect;
