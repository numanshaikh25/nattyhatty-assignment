import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";
import ToolbarContainer from "../common/ToolbarContainer";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";
import AvatarImg from "../../images/Avatar(dp).png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
function Profile({ mobile = "" }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ToolbarContainer
      children={
        <Box
          sx={{
            [theme.breakpoints.up("lg")]: {
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              width: "100%",
            },
            [theme.breakpoints.up("md")]: {
              //  display: "flex",
              // justifyContent: "space-between",
              // gap: "1rem",
              // width: "100%",
            },
          }}
        >
          {/*  <Grid item xl={4} lg={4} md={12} xs={12}> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Box sx={{ p: 1, cursor: "pointer" }}>
              <Badge
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <CameraAltIcon
                    sx={{
                      width: 22,
                      height: 22,
                      p: "0.2rem",
                      border: `2px solid grey`,
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></CameraAltIcon>
                }
              >
                <Avatar sx={{ width: 100, height: 100 }} alt="Travis Howard" src={AvatarImg} />
              </Badge>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Upload New</MenuItem>
                <MenuItem onClick={handleClose}>Remove</MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 1,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ m: 0, textAlign: "left" }}>
                John Smith
              </Typography>
              <Typography variant="p" gutterBottom sx={{ textAlign: "left", fontSize: "0.9rem", whiteSpace: "nowrap" }}>
                <LocationOnIcon sx={{ width: 15, height: 15, m: 0, p: 0 }} />
                Main St. Farmington, CA 123
              </Typography>
            </Box>
          </Box>
          {/*   </Grid> */}
          <Box
            className="form"
            sx={{
              display: "flex",
              gap: "1rem",
              flex: 1,
              justifyContent: "space-between",
              [theme.breakpoints.up("lg")]: {
                pl: "1.5rem",
                pr: "1.5rem",
              },
              [theme.breakpoints.up("md")]: {},
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Input id={"firstname"} placeholder={"firstname"} label={"First Name"} value={"John"} />
              <Input id={"lastname"} placeholder={"lastname"} label={"Last Name"} value={"Smith"} />
              {mobile !== "mobile" && (
                <Input id={"email"} placeholder={"email"} label={"email"} value={"johnsmith@yahoo.com"} />
              )}
            </Box>
            <Box sx={{ width: "100%" }}>
              <Input id={"phone"} placeholder={"phone"} label={"Phone"} value={"+1 (324) 234-2342"} />
              <Input id={"Graduation Year"} placeholder={"Graduation Year"} label={"Graduation Year"} value={"1988"} />
              {mobile !== "mobile" && (
                <Input
                  id={"Date of Birth"}
                  placeholder={"Date of Birth"}
                  label={"Date of Birth"}
                  value={"08/03/1960"}
                />
              )}
            </Box>
          </Box>
          <Box
            className="button-Container"
            sx={{
              [theme.breakpoints.up("lg")]: {
                display: "flex",
                flexDirection: "column",
                marginTop: "0",
              },
              [theme.breakpoints.up("md")]: {
                display: "flex",
                gap: "0.5rem",
                marginTop: "3rem",
              },
              [theme.breakpoints.up("xs")]: {
                display: "flex",
                flexDirection: "row",
                marginTop: "1.375rem",
              },
            }}
          >
            {mobile !== "mobile" ? (
              <>
                <PrimaryButton color="#0b611a" text="Save Changes" />
                <PrimaryButton color="#232e3e" text="Save Password" />
                <PrimaryButton color="#ff3a3a" text="Leave Family" />
              </>
            ) : (
              <PrimaryButton color="#232E3E" text="Edit Profile" />
            )}
          </Box>
        </Box>
      }
    />
  );
}

export default Profile;
