import React from "react";
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  InputAdornment,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Avatar,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Typography } from "@mui/material";
import { FaListUl } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { LuLayers } from "react-icons/lu";




function Projects() {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Box>
          <h2>Projects</h2>
          <Typography 
      variant="body1" 
      sx={{ color: "#979797", lineHeight: 1.6, fontSize: "16px", marginTop: -2 }}
    >       Manage all projects within this Workspace.

     
    </Typography>
        </Box>
        <Box>
          <Button
            startIcon={<UploadFileIcon />}
            variant="outlined"
            sx={{ marginRight: 1 }}
          >
            Import Project
          </Button>
          <Button startIcon={<AddIcon />} variant="contained" sx={{backgroundColor:"#7073fc"}}>
            Create Project
          </Button>
        </Box>
      </Box>

      {/* Search and Filter Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        
        <Button variant="text" sx={{borderBottom:"3px solid"}}>
        <FaListUl style={{color:"#000", fontSize:"20px"}} />
        <Typography variant="h6" sx={{color:'black', marginLeft:"14px", fontSize:"15px", fontFamily:"sans-serif"}}>
        List
      </Typography>
        </Button>

        <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
            <TextField
          placeholder="Search project"
          variant="outlined"
          size="small"
          sx={{
            width: "200px",
            height: "32px", // Adjust the height
            borderRadius: "8px", // Adjust border radius
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px", // Apply border radius to the input
              height: "32px", // Adjust height for the field
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CiSearch />
              </InputAdornment>
            ),
          }}
          

          
        />
        <IconButton>
          <FilterListIcon />
        </IconButton>

      </Box>
        
      </Box>

      

      {/* Projects Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Task Progress</TableCell>
              <TableCell>Owner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{ width: 24, height: 24, marginRight: 1, backgroundColor:"rgb(255, 52, 101)" }}
                                        
                  >
                  <LuLayers size={16} />
                  </Avatar>
                  Demo Project
                </Box>
              </TableCell>
              <TableCell>
                <Chip label="On Track" color="success" size="small" sx={{padding:"0px 16px", backgroundColor:"rgb(172 220 121)"}} />
              </TableCell>
              <TableCell>
                <Chip label="Urgent" color="error" size="small"  sx={{padding:"0px 16px", backgroundColor:"rgb(249 112 102)"}} />
              </TableCell>
              <TableCell>
                <IconButton size="small">
                  <CalendarTodayIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton size="small">
                  <CalendarTodayIcon />
                </IconButton>
              </TableCell>
              <TableCell>0%</TableCell>
              <TableCell>
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  src="https://via.placeholder.com/24"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer Action */}
      <Button
        variant="text"
        startIcon={<AddIcon />}
        sx={{ marginTop: 2 }}
        color="primary"
      >
        Create Project
      </Button>
    </Box>
  );
};

export default Projects;
