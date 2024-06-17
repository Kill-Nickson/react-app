import { StandardTextFieldProps, TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

interface Props extends StandardTextFieldProps {
  rounded?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<Element>;
}

const CustomTextField = ({ className, rounded, ...props }: Props) => {
  // const matches = useMediaQuery('(min-width:1380px)');

  return (
    <TextField
      fullWidth
      {...props}
      // size={matches ? 'medium' : 'small'}
      size={'small'}
      sx={{
        '.css-10hburv-MuiTypography-root': {
          fontSize: '16px',
        },
        '& fieldset': {
          borderRadius: rounded ? '30px' : '10px',
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
          color: 'black', // Set entered text color to black
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
      className={className}
    />
  );
};

export default CustomTextField;
