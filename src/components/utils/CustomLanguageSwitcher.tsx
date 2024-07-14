import { MdKeyboardArrowDown } from 'react-icons/md';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import i18n from '@utils/i18next';
import { gbFlag, uaFlag } from '@assets/images';


type Props = {
  className: string;
};

const optionsFlag = [
  { lang: 'ua', icon: uaFlag },
  { lang: 'en', icon: gbFlag },
];

const CustomLanguageSwitcher = ({ className }: Props) => {
  const [selectedLang, setSelectedLang] = useState(i18n.language.slice(0, 2));

  useEffect(() => {
    setSelectedLang(i18n.language.slice(0, 2));
  }, [i18n.language]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLang = event.target.value;
    setSelectedLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <Select
      className={ className }
      onChange={handleChange}
      value={selectedLang}
      MenuProps={{
        PaperProps: {
          style: {
            color: 'black',
            marginTop: '10px',
          },
        },
      }}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent',
        },
        '&.MuiInputBase-root': {
          '&::after': {
            borderBottom: '1px solid #e65100',
          },
          '&::before': {
            borderBottom: '1px solid #e65100',
          },
          '& .MuiSelect-select': {
            '&.MuiInputBase-input': {
              '&.MuiOutlinedInput-input': {
                paddingY: 0,
                paddingLeft: 0,
                paddingRight: 0,
                color: '#858585',
              },
            },
          },
        },
      }}
      IconComponent={() => (
        <MdKeyboardArrowDown color={'#e65100'} size={'1px'} className='mr-[1px]' />
      )}
    >
      {optionsFlag.map(({ lang, icon }) => (
        <MenuItem
          value={lang}
          key={lang}
          sx={{
            paddingX: 1,
            paddingY: 1,
          }}
        >
          <img src={icon} alt={lang} className='w-10 h-6' />
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomLanguageSwitcher;
