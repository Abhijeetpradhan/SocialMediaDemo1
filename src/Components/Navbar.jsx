import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Instagram, Notifications, Mail } from "@mui/icons-material";

const Navbar = () => {

 const [openProfile,setOpenProfile] = useState(false); 


  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const StyledSearch = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    width: "40%",
    borderRadius: theme.shape.borderRadius,
    padding: "0 10px",
    
  }));

  const Icons = styled("div")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const StyledIconForMobile = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>

        <Instagram sx={{ display: { xs: "block", sm: "none" } }} />

        <StyledSearch>
          <InputBase placeholder="Search..."  />
        </StyledSearch>

        <Icons>
          <Badge color="error">
            <Notifications sx={{ fontSize: "30px" }} />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Mail sx={{ fontSize: "30px" }} />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/5444994/pexels-photo-5444994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: "40px",
              height: "40px",
            }}
            onClick={()=>setOpenProfile(true)}
          />
        </Icons>
        <StyledIconForMobile>
          <Avatar
            src="https://images.pexels.com/photos/5444994/pexels-photo-5444994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: "30px",
              height: "30px",
            }}
            onClick={()=>setOpenProfile(true)}
          />

          <Typography variant="span">Baby</Typography>
        </StyledIconForMobile>

        <Menu
          open={openProfile}
          onClose={(e)=>setOpenProfile(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
