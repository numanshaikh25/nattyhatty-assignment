import { Box } from "@mui/material";
import React from "react";
import Header from "../Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Profile from "../Profile";
import Family from "../Family";
import BankAccount from "../common/BankAccount";
import BankImg from "../../images/mastercard.png";
import Activities from "../Activities";
import { activityData } from "../../data/ActivityData";
import Card from "../common/Card";
import Invitations from "../Invitations";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
const theme = createTheme({
  palette: {
    primary: {
      main: "#F8991F",
    },
    secondary: {
      main: "#0044ff",
    },
    root: {
      backgroundColor: "5f#f5f5",
      textTransform: "capitalize",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function MobileDashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          pt: "1rem",
          px: "0.7rem",
          pb: "3rem",
        }}
      >
        <Header title="My Account" mobile="mobile" />
        <Box sx={{ width: "100%", bgcolor: "white" }}>
          <Tabs
            TabIndicatorProps={{ style: { background: "#F8991F", border: "1px solid #F8991F" } }}
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab
              label="Profile"
              sx={{
                "& .MuiTabs-indicator": {
                  textTransform: "capitalize",
                  fontWeight: "500",
                  // height: 3,
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#F8991F",
                },
              }}
              {...a11yProps(0)}
            />
            <Tab label="Wallet" {...a11yProps(1)} />
            <Tab label="Activities" {...a11yProps(2)} />
            <Tab label="Invitations" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Family mobile="mobile" />
            <Profile mobile="mobile" />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <BankAccount mobile="mobile" image={BankImg} number={"**** **** **** 5967"} expiryDate={"Expires 09/27"} />
            <BankAccount mobile="mobile" image={BankImg} number={"**** **** **** 5967"} expiryDate={"Expires 09/27"} />
            <BankAccount mobile="mobile" image={BankImg} number={"**** **** **** 5967"} expiryDate={"Expires 09/27"} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box>
            <Activities activityMobile="mobile" />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Invitations invitationMobile="invitationMobile" />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}

export default MobileDashboard;
