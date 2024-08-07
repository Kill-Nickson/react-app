import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import { persistor } from '@store';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@utils/enums';
import LanguageSwitcher from '@components/utils/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

type Props = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleToggleSidebar = () => {
    toggleSidebar();
  };
  
  const logout = async () => {
    await persistor.purge();
    navigate(ROUTE.AUTH_LOGIN);
  };


  return (
    <header className="w-full">
      <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
        <AppBar position="static" className="max-w-screen mx-auto">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ReactApp
            </Typography>

            <LanguageSwitcher className='w-10 h-6 mr-2' />

            <Button onClick={logout} color="inherit">{t('header.logout')}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Header;