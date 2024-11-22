import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import { GoInbox } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { TbHistory } from "react-icons/tb";
import { SlLayers } from "react-icons/sl";
import { GoGoal } from "react-icons/go";
import { HiOutlineFolderOpen } from "react-icons/hi2";
import { TbMessages } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";


export const mainListItems = (

  <React.Fragment>
    <ListItem sx={{ position: 'relative', top: '-60px' }}>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <RiHome6Line style={{ fontSize: '22px', stroke: '#ff3465', strokeWidth:'1' }} />
      </ListItemIcon>
      <ListItemText
        primary="Kroolo Space"
        primaryTypographyProps={{ fontSize: '15px' }}
      />
    </ListItem>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}> 
        <GoInbox style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <BiMessageSquareDetail style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="Direct Messages" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <FaTasks style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="My Tasks" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <BsStars style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="AI Agents" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <IoChatboxOutline style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="Chat With Anything" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <TbHistory style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="Track Time" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <SlLayers style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <GoGoal style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="Goals" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <HiOutlineFolderOpen style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="Docs" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <TbMessages style={{ fontSize: '18px' }} />
      </ListItemIcon>
      <ListItemText primary="Channels" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: '30px' }}>
      <MdPeopleOutline style={{ fontSize: '18px' }}/>
      </ListItemIcon>
      <ListItemText primary="Teams" />
    </ListItemButton>
      
  </React.Fragment>
);

