import React from 'react';
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SwipeableTemporaryDrawer } from './drawer';
import { useAppDispatch } from '../../app/hooks';
import { searchpick } from '../search-slice';
import { useAuth } from '../../auth/hooks/use-auth';
import { useUser } from '../../auth/hooks/use-user';
import { useCart } from '../../cart/hooks/use-cart';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: '15px',
  width: '30%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '25%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Appbar = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { items: cartItems, invalidateCache: invalidateCart } = useCart();
  const { logout } = useAuth();
  const user = useUser();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        disabled={!!user.data}
        onClick={() => {
          handleMenuClose();
          navigate('/signin');
        }}
      >
        Sign in
      </MenuItem>
      <MenuItem
        disabled={!!user.data}
        onClick={() => {
          handleMenuClose();
          navigate('/signup');
        }}
      >
        Sign up
      </MenuItem>
      <MenuItem
        disabled={!user.data}
        onClick={() => {
          handleMenuClose();
          navigate('/profile');
        }}
      >
        My profile
      </MenuItem>
      <MenuItem
        disabled={!user.data}
        onClick={() => {
          handleMenuClose();
          invalidateCart();
          logout();
          navigate('/');
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, paddingTop: '63px' }}>
      <AppBar sx={{ position: 'fixed' }}>
        <Toolbar>
          <SwipeableTemporaryDrawer />
          <Grid
            sx={{ display: 'flex' }}
            onClick={() => navigate('/')}
            onMouseOver={(e) => {
              const div: HTMLDivElement = e.currentTarget;
              div.style.cursor = 'pointer';
            }}
          >
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQF1qWbCFs8_Sw/company-logo_200_200/0/1627567411043?e=1645660800&v=beta&t=xH87SO_1ENjI-3WMoXuJ_HpaVtyGmetNTF3qJo-7zp4"
              alt="logo"
              height="40px"
              width="40px"
            />
            <Typography
              variant="h6"
              onClick={() => navigate('/')}
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '5px' }}
            >
              Intellectsoft Shop
            </Typography>
          </Grid>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {
                dispatch(searchpick(e.currentTarget.value));
                navigate('/');
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/cart">
              <IconButton size="large" sx={{ color: '#e0e0e0' }}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{ color: '#e0e0e0' }}
            >
              {user.data ? (
                <Avatar src="https://pickaface.net/gallery/avatar/20120409_230759_3646_Fake.png" />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
