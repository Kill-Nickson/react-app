import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: Props) => {
  const handleToggleSidebar = () => {
    toggleSidebar();
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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Header;