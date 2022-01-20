import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import AllOutIcon from '@mui/icons-material/AllOut';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { menupick, selectCategory } from '../drawer-slice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useEffect, useState } from 'react';

type Anchor = 'left';

export const SwipeableTemporaryDrawer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pickedCategory = useAppSelector(selectCategory);
  const [category, setCategory] = useState('All products');
  const [state, setState] = React.useState({
    left: false,
  });

  useEffect(() => setCategory(pickedCategory), [pickedCategory]);

  const menuItems = [
    {
      text: 'All products',
      icon: <AllOutIcon color="primary" />,
    },
    {
      text: 'Electronics',
      icon: <ElectricalServicesIcon color="primary" />,
    },
    {
      text: 'Toys',
      icon: <ChildCareIcon color="primary" />,
    },
    {
      text: 'Food',
      icon: <FastfoodIcon color="primary" />,
    },
    {
      text: 'Clothes',
      icon: <AccessibilityIcon color="primary" />,
    },
  ];

  const handleContacts = (text: string) => {
    if (text === 'Contacts') {
      window.location.href = 'https://www.intellectsoft.net/contacts';
    }
    if (text === 'About') {
      window.location.href = 'https://www.intellectsoft.net/about';
    }
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            selected={item.text == category}
            onClick={() => {
              dispatch(menupick(item.text));
              navigate(`/` + qs.stringify({ category: dispatch(menupick(item.text)).payload }));
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText color="primary">{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Contacts', 'About'].map((text, index) => (
          <ListItem button key={text} onClick={() => handleContacts(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <ContactsIcon color="primary" />
              ) : (
                <ContactSupportIcon color="primary" />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton aria-label="drawer" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: '#ffffff', marginRight: '5px' }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
