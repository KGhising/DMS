import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
// import ListItemLink from '@material-ui/core/ListItemLink';
import Icon from '@material-ui/core/Icon';

const SidebarItem = (props) => {
  return (
    <NavLink to={'/admin' + props.route} style={{ textDecoration: 'none', color: 'white' }}>
      <ListItem button>

        {/* <ListItemIcon> */}
          <Icon color="inherit">{props.iconName}</Icon>
          
        {/* </ListItemIcon> */}
        <ListItemText primary={props.name} style={{marginLeft:'10px'}}/>
        

      </ListItem>
    </NavLink >
  );
}

export default SidebarItem;